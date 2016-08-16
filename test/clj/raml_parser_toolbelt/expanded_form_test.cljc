(ns raml-parser-toolbelt.expanded-form-test
  #?(:cljs (:require-macros [cljs.test :refer [deftest is]]))
  (:require #?(:clj [clojure.test :refer :all])
            [raml-parser-toolbelt.expanded-form :refer [expanded-form]]))

#?(:cljs (enable-console-print!))


(def types-context {"Songs.Song" {:properties {:title "string"
                                               :length "number"}}
                    "Songs.Album" {:properties {:title "string"
                                                :songs "Songs.Song[]"}}
                    "Songs.LP" {:type "Songs.Song"
                                :properties {:duration "string"}}
                    "Songs.Publication" {:type ["Songs.Album", "Songs.LP", "Songs.C"]
                                         :properties {:date "string"}}
                    "Songs.Musician" {:properties {:name "string"
                                                   :discography "(Songs.Song | Songs.Album)[]"}}
                    "Songs.C" {:type "object", :properties {:other "integer"}}
                    "Songs.Constrained" {:type "array" :items "string" :minItems 10}
                    })

(deftest expanded-form-object-test
  (let [song (get types-context "Songs.Song")]
    (is (= {:type "object"
            :properties
            {"title"  {:type "string" :required true}
             "length" {:type "number" :required true}}
            :additionalProperties true
            :required true}
           (expanded-form song types-context)))))


(deftest expanded-form-array-test
  (let [song (get types-context "Songs.Album")]
    (is (= {:type "object"
            :properties
            {"title" {:type "string" :required true}
             "songs" {:type "array"
                      :items {:type "object"
                              :properties
                              {"title"  {:type "string" :required true}
                               "length" {:type "number" :required true}}
                              :additionalProperties true
                              :required true}
                      :required true}}
            :additionalProperties true
            :required true}
           (expanded-form song types-context)))))



(deftest expanded-form-union-test
  (let [musician (get types-context "Songs.Musician")]
    (is (= {:type "object"
            :properties
            {"name" {:type "string" :required true}
             "discography" {:type "array"
                            :items {:type "union"
                                    :of
                                    [{:type "object"
                                      :properties
                                      {"title"  {:type "string" :required true}
                                       "length" {:type "number" :required true}}
                                      :additionalProperties true
                                      :required true}
                                     {:type "object"
                                      :properties
                                      {"title" {:type "string" :required true}
                                       "songs" {:type "array"
                                                :items
                                                {:type "object"
                                                 :properties
                                                 {"title"  {:type "string" :required true}
                                                  "length" {:type "number" :required true}}
                                                 :additionalProperties true
                                                 :required true}
                                                :required true}}
                                      :additionalProperties true
                                      :required true}]
                                    :required true}
                            :required true}}
            :additionalProperties true
            :required true}
           (expanded-form musician types-context)))))

(deftest expanded-form-multiple-inheritance
  (let [publication (get types-context "Songs.Publication")]
    (is (= {:properties {"date" {:type "string" :required true}},
            :type
            [{:type {:properties
                     {"title" {:type "string", :required true},
                      "songs" {:type "array",
                               :items {:properties {"title" {:type "string", :required true},
                                                    "length" {:type "number", :required true}},
                                       :type "object",
                                       :additionalProperties true,
                                       :required true},
                               :required true}},
                     :type "object",
                     :additionalProperties true,
                     :required true},
              :required true}
             {:type {:properties {"duration" {:type "string" :required true}},
                     :type {:properties {"title" {:type "string", :required true},
                                         "length" {:type "number", :required true}},
                            :type "object",
                            :additionalProperties true,
                            :required true},
                     :additionalProperties true,
                     :required true},
              :required true}
             {:type {:properties {"other" {:type "integer", :required true}},
                     :type "object",
                     :additionalProperties true,
                     :required true},
              :required true}],
            :additionalProperties true,
            :required true}
           (expanded-form publication types-context)))))


(deftest expanded-form-constrained
  (let [constrained (get types-context "Songs.Constrained")]
    (is (= {:minItems 10,
            :type "array",
            :items {:type "string", :required true},
            :required true}
           (expanded-form constrained types-context)))))


(deftest expanded-form-simple-inheritance
  (let [input {:type {:type "object", :properties {:a {:type "string" :required true}}}
               :properties {:b "integer"}}]
    (is (= {:properties {"b" {:type "integer" :required true}},
            :type { :properties {"a" {:type "string", :required true}},
                   :type "object",
                   :additionalProperties true,
                   :required true},
            :additionalProperties true
            :required true}
           (expanded-form input {})))))
