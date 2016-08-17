(ns datatype-expansion.canonical-form-test
  #?(:cljs (:require-macros [cljs.test :refer [deftest is]]))
  (:require #?(:clj [clojure.test :refer :all])
            [raml-parser-toolbelt.canonical-form :refer [canonical-form]]
            [raml-parser-toolbelt.expanded-form :refer [expanded-form]]))

(deftest canonical-form-atomic
  (let [input {:type "string"}]
    (is (= {:type "string"} (canonical-form input)))))


(deftest canonical-form-array
  (let [input {:type "array" :items {:type "string"}}]
    (is (= {:type "array" :items {:type "string"}} (canonical-form input)))))


(deftest canonical-form-object
  (let [input (expanded-form {:type "object" :properties {:a "string" :b "any"}} {})]
    (is (= {:properties
            {"a" {:type "string", :required true},
             "b" {:type "any", :required true}},
            :type "object",
            :additionalProperties true,
            :required true}
           (canonical-form input)))))


(deftest canonical-form-object-union-props
  (let [input (expanded-form {:type "object" :properties {:a "string" :b "number | string"}} {})]
    (is (= {:type "union",
            :additionalProperties true,
            :required true,
            :of
            '({:properties
               {"a" {:type "string", :required true},
                "b" {:type "number", :required true}},
               :type "object",
               :additionalProperties true,
               :required true}
              {:properties
               {"a" {:type "string", :required true},
                "b" {:type "string", :required true}},
               :type "object",
               :additionalProperties true,
               :required true})}
           (canonical-form input))))

  (let [input (expanded-form {:type "object" :properties {:a "datetime | integer" :b "number | string"}} {})]
    (is (= {:type "union",
            :additionalProperties true,
            :required true,
            :of
            '({:properties
               {"a" {:type "datetime", :required true},
                "b" {:type "number", :required true}},
               :type "object",
               :additionalProperties true,
               :required true}
              {:properties
               {"a" {:type "datetime", :required true},
                "b" {:type "string", :required true}},
               :type "object",
               :additionalProperties true,
               :required true}
              {:properties
               {"a" {:type "integer", :required true},
                "b" {:type "number", :required true}},
               :type "object",
               :additionalProperties true,
               :required true}
              {:properties
               {"a" {:type "integer", :required true},
                "b" {:type "string", :required true}},
               :type "object",
               :additionalProperties true,
               :required true})}
           (canonical-form input)))))


(deftest canonical-form-simple-inheritance
  (let [context {:a {:properties {:a "number"}}}
        input (expanded-form {:type "a", :properties {:b "string"}} context)]
    (is (= {:type "object",
            :additionalProperties true,
            :required true,
            :properties
            {"a" {:type "number", :required true},
             "b" {:type "string", :required true}}}
           (canonical-form input)))))

(deftest canonical-form-simple-inheritance-union
  (let [context {:a "string | integer"}
        input (expanded-form {:type "a", :properties {:b "string"}} context)]
    (is (thrown? #?(:clj Exception :cljs js/Error) (println (canonical-form input)))))
  (let [context {:a {:properties {:pa "string | integer"}}}
        input (expanded-form {:type "a" :properties {:b "string"}} context)]
    (is (= {:type "union",
            :additionalProperties true,
            :required true,
            :of
            '({:type "object",
              :additionalProperties true,
              :required true,
              :properties
              {"pa" {:type "string", :required true},
               "b" {:type "string", :required true}}}
             {:type "object",
              :additionalProperties true,
              :required true,
              :properties
              {"pa" {:type "integer", :required true},
               "b" {:type "string", :required true}}})}
           (canonical-form input))))
  (let [input {:type {:type {:items {:properties {:a "string | integer", :b "nil"}}}}
               :items {:properties {:c "number"}}}
        input (expanded-form input {})]
    (is (= {:type "union",
            :additionalProperties true,
            :required true,
            :of
            '({:type "array",
               :required true,
               :items {:type "object",
                       :additionalProperties true,
                       :required true,
                       :properties {"a" {:type "string", :required true},
                                    "b" {:type "nil", :required true},
                                    "c" {:type "number", :required true}}}}
              {:type "array",
               :required true,
               :items {:type "object",
                       :additionalProperties true,
                       :required true,
                       :properties {"a" {:type "integer", :required true},
                                    "b" {:type "nil", :required true},
                                    "c" {:type "number", :required true}}}})}
           (canonical-form input)))))

(deftest canonical-form-multiple-inheritance
  (let [input {:type [{:properties {:a "string"}}
                      {:properties {:b "integer"}}
                      {:properties {:c "any"}}]}
        input (expanded-form input {})]
    (is (= {:type "object",
            :additionalProperties true,
            :required true,
            :properties
            {"c" {:type "any", :required true},
             "a" {:type "string", :required true},
             "b" {:type "integer", :required true}}}
           (canonical-form input)))))

(deftest canonical-form-constraints
  (let [input {:type {:type "array" :items "string", :minItems 10} :minItems 15 :maxItems 20}
        input (expanded-form input {})]
    (is (= {:minItems 15,
            :type "array",
            :maxItems 20,
            :required true,
            :items {:type "string", :required true}}
           (canonical-form input))))
  (let [input {:type {:type "array" :items "string", :minItems 10} :minItems 15 :maxItems 5}
        input (expanded-form input {})]
    (is (thrown? #?(:clj Exception :cljs js/Error) (canonical-form input)))))
