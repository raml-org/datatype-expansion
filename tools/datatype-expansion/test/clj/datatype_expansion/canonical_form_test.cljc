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
            :additionalProperties true,
            :required true}
           (canonical-form input)))))


(deftest canonical-form-object-union-props
  (let [input (expanded-form {:type "object" :properties {:a "string" :b "number | string"}} {})]
    (is (= {:type "union",
            :additionalProperties true,
            :required true,
            :anyOf
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
            :anyOf
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
            :required true,
            :anyOf
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
            :anyOf
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
