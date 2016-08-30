(ns datatype-expansion.expanded-form
  #?(:cljs (:require-macros [datatype-expansion.utils-macros :refer [maybe]]))
  (:require #?(:clj [datatype-expansion.utils :refer [error]])
            #?(:clj [datatype-expansion.utils-macros-clj :refer [maybe]])
            [clojure.string]
            [datatype-expansion.utils :refer [clear-node error]]
            [instaparse.core :as insta]
            [clojure.walk :refer [stringify-keys]]))

#?(:cljs (enable-console-print!))

(declare expanded-form)

(def raml-grammar "TYPE_EXPRESSION = TYPE_NAME | SCALAR_TYPE | <'('> <BS>  TYPE_EXPRESSION <BS> <')'> | ARRAY_TYPE | UNION_TYPE
                   SCALAR_TYPE = 'string' | 'number' | 'integer' | 'boolean' | 'date-only' | 'time-only' | 'datetime-only' | 'datetime' | 'file' | 'nil'
                   ARRAY_TYPE = TYPE_EXPRESSION <'[]'>
                   TYPE_NAME = #\"(\\w[\\w\\d]+\\.)*\\w[\\w\\d]+\"
                   UNION_TYPE = TYPE_EXPRESSION <BS> (<'|'> <BS> TYPE_EXPRESSION)+
                   BS = #\"\\s*\"
                   ")

(def raml-type-grammar-analyser (insta/parser raml-grammar))

(defn ast->type [ast context]
  (let [type (filterv #(not= % :TYPE_EXPRESSION) ast)]
    (if (and (= 1 (count type))
             (vector? (first type)))
      (recur (first type) context)
      (condp = (first type)
        :UNION_TYPE {:type "union"
                     :anyOf (mapv #(ast->type % context) (rest type))}
        :SCALAR_TYPE {:type (last type)}
        :ARRAY_TYPE {:type "array"
                     :items (ast->type (last type) context)}
        :TYPE_NAME (let [ref-type (->> context
                                       (filter (fn [[k v]]
                                                 (let [last-part (last (clojure.string/split k #"\."))]
                                                   (or (= (name k) (last type))
                                                       (= last-part (last type))))))
                                       (mapv last)
                                       first)]
                     (if (nil? ref-type)
                       (error (str "Cannot find type reference " (last type)))
                       ref-type))
        (error (str "Cannot parse type expression AST " (mapv identity type)))))))

(defn parse-type-expression [exp context]
  (try
    (ast->type (raml-type-grammar-analyser exp) context)
    (catch #?(:clj Exception :cljs js/Error) ex
                                        ;(println (str "Cannot parse type expression '" exp "': " ex))
      nil)))


(def atomic-types #{"any" "boolean" "datetime" "datetime-only" "date-only" "time-only"
                    "number" "integer" "string" "nil" "file"})

(defn- process-constraints [parsed-type type-node]
  (-> parsed-type
      (assoc :required (:required type-node true))
      (assoc :example (:example type-node))
      (assoc :default (:default type-node))
      (assoc :examples (:examples type-node))
      (assoc :title (:title type-node))
      (assoc :minProperties (:minProperties type-node))
      (assoc :maxProperties (:maxProperties type-node))
      (assoc :discriminator (:discriminator type-node))
      (assoc :discriminatorValue (:discriminatorValue type-node))
      (assoc :minLength (:minLength type-node))
      (assoc :maxLength (:maxLength type-node))
      (assoc :minimum (:minimum type-node))
      (assoc :maximum (:maximum type-node))
      (assoc :format (:format type-node))
      (assoc :multipleOf (:multipleOf type-node))
      (assoc :pattern  (:pattern type-node))
      (assoc :uniqueItems (:uniqueItems type-node))
      (assoc :minItems (:minItems type-node))
      (assoc :maxItems (:maxItems type-node))
      (assoc :enum (let [enum-values (into [] (:enum type-node))]
                           (if (empty? enum-values) nil enum-values)))
      (assoc :additionalProperties (:additionalProperties type-node (if (or (= "object" (:type parsed-type))
                                                                            (some? (:properties parsed-type)))
                                                                      true
                                                                      nil)))))

(defn- xml-type? [type] (and (string? type) (clojure.string/starts-with? type "<?xml")))

(defn- json-type? [type] (and (string? type) (clojure.string/starts-with? type "{")))

(defn check-required [{:keys [properties] :as object}]
  (->> (or properties [])
       (map (fn [[k v]]
              [k (assoc v :required (get v :required true))]))
       (into {})
       (assoc object :properties)))

(defn process-items [node context]
  (if (some? (:items node))
    (assoc node :items (expanded-form (:items node) context))
    node))

(defn process-properties [node context]
  (if (some? (:properties node))
    (assoc node :properties (->> (:properties node)
                                 (map (fn [[k v]] [k (expanded-form v context)]))
                                 (into {})))
    node))

(defn expanded-form [type-node context]
  (let [type-node (if (and (map? type-node)
                           (some? (:properties type-node)))
                    (assoc type-node :properties (->> (:properties type-node)
                                                      (map (fn [[k v]] [(name k) v]))
                                                      (into {})))
                    type-node)
        type (if (string? type-node)
               type-node
               (or (:type type-node)
                   (:schema type-node)))]
    (cond

      ;; Multiple inheritance
      (and (not (map? type))
           (coll? type))                      (-> (assoc type-node :type (mapv #(expanded-form % context) type))
                                                  (process-properties context)
                                                  (process-items context)
                                                  (process-constraints type-node)
                                                  clear-node)

      (get atomic-types type)                 (-> {:type type}
                                                  (process-constraints type-node)
                                                  clear-node)

      (or
       (and (nil? type)
            (some? (:items type-node)))
       (= type "array"))                      (-> {:type "array"}
                                                  ;;(assoc :items (get type-node :items {:type "string"}))
                                                  (assoc :items (expanded-form (:items type-node {:type "string"}) context))
                                                  (process-constraints type-node)
                                                  clear-node)

      (or
       (and (nil? type)
            (some? (:properties type-node)))
       (= type "object"))                     (-> {:type "object"}
                                                  (process-constraints type-node)
                                                  (assoc :properties (->> (:properties type-node)
                                                                          (mapv (fn [[prop-name type]] [(name prop-name) (expanded-form type context)]))
                                                                          (into {})))
                                                  clear-node)

      (= type "union")                        (-> {:type "union"
                                                   :anyOf   (mapv #(expanded-form % context) (:anyOf type-node))}
                                                  (process-constraints type-node)
                                                  clear-node)

      (and (some? type)
           (or (string? type)
               (keyword? type))
           (or
            (get context (name type))
            (get context (keyword type))))    (-> (if (map? type-node) type-node {})
                                                  (assoc :type (expanded-form (or (get context (name type))
                                                                                  (get context (keyword type))) context))
                                                  (process-properties context)
                                                  (process-items context)
                                                  (process-constraints type-node)
                                                  clear-node)

      (xml-type? type)                        (-> {:type "xml", :content type})

      (json-type? type)                       (-> {:type "json", :content type})

      (and (nil? type)
           (some? type-node))                 (-> {:type "string"} ;; or any depending if we are in the body or not
                                                  (process-constraints type-node)
                                                  clear-node)

      (and (string? type)
           (re-matches #"^.*\?$" type))       {:type "union"
                                               :anyOf [{:type (clojure.string/replace type "?" "")}
                                                       {:type "nil"}]}

      (map? type)                             ;; simple inheritance
      (let [result (expanded-form (assoc type-node :type [type]) context)]
        (-> result
            (process-properties context)
            (process-items context)
            (assoc :type (first (:type result)))))

      :else                                   (let [parsed-type (parse-type-expression type context)]
                                                (if (some? parsed-type)
                                                  (expanded-form parsed-type context)
                                                  (error (str "Unknown type " type)))))))
