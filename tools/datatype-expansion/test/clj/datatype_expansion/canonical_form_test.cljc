(ns datatype-expansion.canonical-form-test
  #?(:cljs (:require-macros [cljs.test :refer [deftest is]]))
  (:require #?(:clj [clojure.test :refer :all])
            [datatype-expansion.canonical-form :refer [canonical-form]]
            [datatype-expansion.expanded-form :refer [expanded-form]]
            [datatype-expansion.test-cases :as test-cases]))

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
            :additionalProperties true}
           (canonical-form input)))))


(deftest canonical-form-object-union-props
  (let [input (expanded-form {:type "object" :properties {:a "string" :b "number | string"}} {})]
    (is (= {:type "union",
            :additionalProperties true,
            :anyOf
            '({:properties
               {"a" {:type "string", :required true},
                "b" {:type "number", :required true}},
               :type "object",
               :additionalProperties true}
              {:properties
               {"a" {:type "string", :required true},
                "b" {:type "string", :required true}},
               :type "object",
               :additionalProperties true})}
           (canonical-form input))))

  (let [input (expanded-form {:type "object" :properties {:a "datetime | integer" :b "number | string"}} {})]
    (is (= {:type "union",
            :additionalProperties true,
            :anyOf
            '({:properties
               {"a" {:type "datetime", :required true},
                "b" {:type "number", :required true}},
               :type "object",
               :additionalProperties true}
              {:properties
               {"a" {:type "datetime", :required true},
                "b" {:type "string", :required true}},
               :type "object",
               :additionalProperties true}
              {:properties
               {"a" {:type "integer", :required true},
                "b" {:type "number", :required true}},
               :type "object",
               :additionalProperties true}
              {:properties
               {"a" {:type "integer", :required true},
                "b" {:type "string", :required true}},
               :type "object",
               :additionalProperties true})}
           (canonical-form input)))))


(deftest canonical-form-simple-inheritance
  (let [context {:a {:properties {:a "number"}}}
        input (expanded-form {:type "a", :properties {:b "string"}} context)]
    (is (= {:type "object",
            :additionalProperties true,
            :properties
            {"a" {:type "number", :required true},
             "b" {:type "string", :required true}}}
           (canonical-form input)))))

(deftest canonical-form-simple-inheritance-error
  (let [context {:a {:properties {:b "number"}}}
        input (expanded-form {:type "a", :properties {:b "string"}} context)]
    (is (thrown? #?(:clj Exception :cljs js/Error) (canonical-form input)))))


(deftest canonical-form-simple-inheritance-union
  (let [context {:a "string | integer"}
        input (expanded-form {:type "a", :properties {:b "string"}} context)]
    (is (thrown? #?(:clj Exception :cljs js/Error) (println (canonical-form input)))))
  (let [context {:a {:properties {:pa "string | integer"}}}
        input (expanded-form {:type "a" :properties {:b "string"}} context)]
    (is (= {:type "union",
            :additionalProperties true,
            :anyOf
            '({:type "object",
               :additionalProperties true,
               :properties
               {"pa" {:type "string", :required true},
                "b" {:type "string", :required true}}}
              {:type "object",
               :additionalProperties true,
               :properties
               {"pa" {:type "integer", :required true},
                "b" {:type "string", :required true}}})}
           (canonical-form input))))
  (let [input {:type {:type {:items {:properties {:a "string | integer", :b "nil"}}}}
               :items {:properties {:c "number"}}}
        input (expanded-form input {})]
    (is (= {:type "union",
            :additionalProperties true,
            :anyOf
            '({:type "array",
               :items {:type "object",
                       :additionalProperties true,
                       :properties {"a" {:type "string", :required true},
                                    "b" {:type "nil", :required true},
                                    "c" {:type "number", :required true}}}}
              {:type "array",
               :items {:type "object",
                       :additionalProperties true,
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
            :items {:type "string"}}
           (canonical-form input))))
  (let [input {:type {:type "array" :items "string", :minItems 10} :minItems 15 :maxItems 5}
        input (expanded-form input {})]
    (is (thrown? #?(:clj Exception :cljs js/Error) (canonical-form input)))))


(deftest complex-canonical-form-1
  (let [input test-cases/complex-example-1
        parts (->> input
                   canonical-form
                   :anyOf
                   (map (fn [elem]
                          [[:numberOfSIMCards (some? (-> elem :properties :numberOfSIMCards))]
                           [:numberOfUSBPorts (some? (-> elem :properties :numberOfUSBPorts))]
                           [[:phone :numberOfSIMCards] (some? (-> elem :properties :phone :properties :numberOfSIMCards))]
                           [[:phone :numberOfUSBPorts] (some? (-> elem :properties :phone :properties :numberOfUSBPorts))]
                           [[:device :numberOfSIMCards] (some? (-> elem :properties :device :properties :numberOfSIMCards))]
                           [[:device :numberOfUSBPorts] (some? (-> elem :properties :device :properties :numberOfUSBPorts))]])))]
    (is (= [[[:numberOfSIMCards true]
             [:numberOfUSBPorts false]
             [[:phone :numberOfSIMCards] true]
             [[:phone :numberOfUSBPorts] false]
             [[:device :numberOfSIMCards] true]
             [[:device :numberOfUSBPorts] false]]
            [[:numberOfSIMCards false]
             [:numberOfUSBPorts true]
             [[:phone :numberOfSIMCards] true]
             [[:phone :numberOfUSBPorts] false]
             [[:device :numberOfSIMCards] true]
             [[:device :numberOfUSBPorts] false]]
            [[:numberOfSIMCards true]
             [:numberOfUSBPorts false]
             [[:phone :numberOfSIMCards] true]
             [[:phone :numberOfUSBPorts] false]
             [[:device :numberOfSIMCards] false]
             [[:device :numberOfUSBPorts] true]]
            [[:numberOfSIMCards false]
             [:numberOfUSBPorts true]
             [[:phone :numberOfSIMCards] true]
             [[:phone :numberOfUSBPorts] false]
             [[:device :numberOfSIMCards] false]
             [[:device :numberOfUSBPorts] true]]]
           parts))))


(deftest union-inheriting-object
  (let [context {"AnimalWithAddress" {:properties {:address "string"}}
                 "Cat" {:type "AnimalWithAddress"
                        :properties {:age { :type "integer | number" }}}}
        expanded (expanded-form "Cat" context)
        canonical (canonical-form expanded)]
    (is (= {:additionalProperties true,
            :type "union",
            :anyOf '({:additionalProperties true,
                      :type "object",
                      :properties {"age" {:type "integer", :required true},
                                   "address" {:type "string", :required true}}}
                     {:additionalProperties true,
                      :type "object",
                      :properties {"age" {:type "number", :required true},
                                   "address" {:type "string", :required true}}})}
           canonical))))


(deftest multiple-inheritance-test
  (let [context {"Animal" {:properties {:age "integer"}}
                 "Pet" {:properties {:owner "string"}}
                 "Cat" {:type ["Animal", "Pet"]}}
        expanded (expanded-form "Cat" context)
        canonical (canonical-form expanded)]

    (is (= canonical
           {:additionalProperties true,
            :type "object",
            :properties {"owner" {:type "string", :required true},
                         "age" {:type "integer", :required true}}}))))

(deftest required-inheritance-error
  (let [input {:properties {:name {:type "string"
                                   :required true}}
               :type {:type "object"
                      :properties {:name {:type "string"
                                          :required false}}}}
        expanded (expanded-form input {})
        canonical (canonical-form expanded)]
    (is (= {:additionalProperties true,
            :type "object",
            :properties {"name" {:type "string", :required true}}}
           canonical))))

(deftest union-strings-error
  (let [input {:properties {:name {:type "string | string"
                                   :required false}}}
        expanded (expanded-form input {})
        canonical (canonical-form expanded)]
    (is (= {:properties {"name"
                         {:anyOf [{:type "string"}
                                  {:type "string"}],
                          :type "union",
                          :required false}},
            :additionalProperties true
            :type "object"}
           expanded))
    (is (= {:properties {"name" {:type "string", :required false}},
            :additionalProperties true,
            :type "object"}
           canonical))))

(deftest optional-property-error
  (let [input {:properties {"name1?" {:type "string" :required true}
                            "name2?" "string"
                            "name3?" {:type "string" :required false}
                            "name4??" "string"}
               :additionalProperties true,
               :type "object"}
        expanded (expanded-form input {})
        canonical (canonical-form expanded)]
    (is (= {:properties {"name1?" {:type "string", :required true},
                         "name2"  {:type "string", :required false},
                         "name3?" {:type "string", :required false}
                         "name4?" {:type "string", :required false}},
            :additionalProperties true,
            :type "object"}
           canonical))))

(deftest custom-type-property-error
  (let [cat {:properties {:name {:type "CatName" :required false}}}
        cat-name "string"
        expanded (expanded-form cat {"Cat" cat "CatName" cat-name})
        canonical (canonical-form expanded)]
    (is (= {:properties {"name" {:type "string", :required false}},
            :additionalProperties true,
            :type "object"}
         canonical))))


(deftest xml-attribute-test
  (let [animal {:type "string"
                :maxLength 42
                :xml {:attribute false
                      :wrapped true
                      :name "cat"
                      :prefix "animal"}}
        cat {:type "Animal"}
        expanded (expanded-form cat {"Animal" animal "Cat" cat})
        canonical (canonical-form expanded)]
    (is (= {:type "string",
            :maxLength 42,
            :xml {:attribute false,
                  :wrapped true,
                  :name "cat",
                  :prefix "animal"}}
           canonical))))

(deftest expansion-file-type
  (let [input {:properties {:photo {:type "file"
                                    :fileTypes ["image/jpeg", "image/png"]
                                    :minLength 1
                                    :maxLength 307200}}}
        expanded (expanded-form input {})
        canonical (canonical-form expanded)]
    (is (= {:properties {"photo" {:type "file",
                                  :minLength 1,
                                  :fileTypes ["image/jpeg" "image/png"],
                                  :maxLength 307200,
                                  :required true}},
            :additionalProperties true,
            :type "object"}
           canonical))))

(deftest union-canonical-type-unnecessary-fields
  (let [input {"Phone" {:type "object"
                        :properties { :manufacturer {:type "string"}
                                     :numberOfSIMCards {:type "number"}
                                     :kind "string"}}
               "Notebook" {:type "object"
                           :properties {:manufacturer {:type "object"}
                                        :numberOfUSBPorts {:type "string"}
                                        :kind "string"}}
               "Device" {:type  "Phone | Notebook"}}
        expanded (expanded-form (get input "Device") input)
        canonical (canonical-form expanded)]
    (is (= {:anyOf '({:properties {"manufacturer" {:type "string", :required true},
                                  "numberOfSIMCards" {:type "number", :required true},
                                  "kind" {:type "string", :required true}},
                     :additionalProperties true,
                     :type "object"}
                    {:properties {"manufacturer" {:additionalProperties true, :type "object",
                                                  :required true,
                                                  :properties {}},
                                  "numberOfUSBPorts" {:type "string", :required true},
                                  "kind" {:type "string", :required true}},
                     :additionalProperties true,
                     :type "object"}),
            :type "union"}
           canonical))))

(deftest union-type-inheritance-problem-test
  (let [input {"CatWithCity" { :properties { :city "string" }}
               "CatWithAddress" { :properties { :address "string"}}
               "Cat" {:type ["CatWithCity" "CatWithAddress"]
                      :properties { :age "string | number"}}}
        expanded (expanded-form (get input "Cat") input)
        canonical (canonical-form expanded)]
    (is (= canonical
           {:additionalProperties true, :type "union", :anyOf
            '({:additionalProperties true, :type "object",
               :properties {"address" {:type "string", :required true},
                            "city" {:type "string", :required true},
                            "age" {:type "string", :required true}}}
              {:additionalProperties true, :type "object",
               :properties {"address" {:type "string", :required true},
                            "city" {:type "string", :required true},
                            "age" {:type "number", :required true}}})}))))

(deftest default-value-test
  (let [input {
               "Animal" {:default "Animal"
                         :type "string"}
               "Cat" {:type "Animal"
                      :default "MyCat"}
               }
        expanded (expanded-form (get input "Cat") input)
        canonical (canonical-form expanded)]
    (is (=  canonical {:default "MyCat", :type "string"}))))
