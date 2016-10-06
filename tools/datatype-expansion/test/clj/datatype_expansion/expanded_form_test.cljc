(ns datatype-expansion.expanded-form-test
  #?(:cljs (:require-macros [cljs.test :refer [deftest is]]))
  (:require #?(:clj [clojure.test :refer :all])
            [datatype-expansion.expanded-form :refer [expanded-form]]
            [clojure.data :refer [diff]]))

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
                    "Songs.ExemplarSong" {:properties {:title {:type "string"
                                                                :example "Great"}
                                                        :length "string"}}
                    "Songs.ExemplarAlbum" {:properties {:title "string"
                                                        :songs "Songs.ExemplarSong[]"}
                                           :examples {
                                                      :Album1 {:title "Test 1"
                                                               :songs [{:title "Great"
                                                                        :length "2"}]}}}
                    "Songs.Cell"  {:properties {:car "any" :cdr "Songs.List | nil"}}
                    "Songs.List"  {:properties {:cell "Songs.Cell"}}
                    })

(deftest expanded-form-nil-test
  (is (thrown? #?(:clj Exception :cljs js/Error)
               (println (expanded-form nil {})))))

(deftest expanded-form-object-test
  (let [song (get types-context "Songs.Song")]
    (is (= {:type "object"
            :properties
            {"title"  {:type "string" :required true}
             "length" {:type "number" :required true}}
            :additionalProperties true}
           (expanded-form song types-context)))))


(deftest expanded-form-array-test
  (let [album (get types-context "Songs.Album")]
    (is (= {:type "object"
            :properties
            {"title" {:type "string" :required true}
             "songs" {:type "array"
                      :items {:type "object"
                              :properties
                              {"title"  {:type "string" :required true}
                               "length" {:type "number" :required true}}
                              :additionalProperties true}
                      :required true}}
            :additionalProperties true}
           (expanded-form album types-context)))))



(deftest expanded-form-union-test
  (let [musician (get types-context "Songs.Musician")]
    (is (= {:type "object"
            :properties
            {"name" {:type "string" :required true}
             "discography" {:type "array"
                            :items {:type "union"
                                    :anyOf
                                    [{:type "object"
                                      :properties
                                      {"title"  {:type "string" :required true}
                                       "length" {:type "number" :required true}}
                                      :additionalProperties true}
                                     {:type "object"
                                      :properties
                                      {"title" {:type "string" :required true}
                                       "songs" {:type "array"
                                                :items
                                                {:type "object"
                                                 :properties
                                                 {"title"  {:type "string" :required true}
                                                  "length" {:type "number" :required true}}
                                                 :additionalProperties true}
                                                :required true}}
                                      :additionalProperties true}]}
                            :required true}}
            :additionalProperties true}
           (expanded-form musician types-context)))))

(deftest expanded-form-multiple-inheritance
  (let [publication (get types-context "Songs.Publication")]
    (is (={:properties {"date" {:type "string", :required true}},
           :additionalProperties true,
           :type
           [{:properties
             {"title" {:type "string", :required true},
              "songs"
              {:type "array",
               :items
               {:properties
                {"title" {:type "string", :required true},
                 "length" {:type "number", :required true}},
                :additionalProperties true,
                :type "object"},
               :required true}},
             :additionalProperties true,
             :type "object"}
            {:properties {"duration" {:type "string", :required true}},
             :additionalProperties true,
             :type
             {:properties
              {"title" {:type "string", :required true},
               "length" {:type "number", :required true}},
              :additionalProperties true,
              :type "object"}}
            {:properties {"other" {:type "integer", :required true}},
             :additionalProperties true,
             :type "object"}]}
          (expanded-form publication types-context)))))


(deftest expanded-form-constrained
  (let [constrained (get types-context "Songs.Constrained")]
    (is (= {:minItems 10,
            :type "array",
            :items {:type "string"}}
           (expanded-form constrained types-context)))))


(deftest expanded-form-simple-inheritance
  (let [input {:type {:type "object", :properties {:a {:type "string" :required true}}}
               :properties {:b "integer"}}]
    (is (= {:properties {"b" {:type "integer" :required true}},
            :type {:properties {"a" {:type "string", :required true}},
                   :type "object",
                   :additionalProperties true},
            :additionalProperties true}
           (expanded-form input {})))))

(deftest expanded-form-doc-nodes
  (let [input (get types-context "Songs.ExemplarSong")
        output (expanded-form input types-context)]
    (is (= output {:properties
                   {"title" {:type "string", :example "Great", :required true},
                    "length" {:type "string", :required true}},
                   :additionalProperties true,
                   :type "object"})))
  (let [input (get types-context "Songs.ExemplarAlbum")
        output (expanded-form input types-context)]
    (is (= output {:properties
                   {"title" {:type "string", :required true},
                    "songs"
                    {:type "array",
                     :items
                     {:properties
                      {"title" {:type "string", :example "Great", :required true},
                       "length" {:type "string", :required true}},
                      :additionalProperties true,
                      :type "object"}
                     :required true}},
                   :additionalProperties true,
                   :type "object",
                   :examples
                   {:Album1 {:title "Test 1", :songs [{:title "Great", :length "2"}]}}}))))

(deftest expanded-recursive
  (let [songs-list (get types-context "Songs.List")]
    (is (= {:type :fixpoint,
            :value {:properties {"cell" {:properties {"car" {:type "any", :required true},
                                                      "cdr" {:anyOf [{:type :$recur}
                                                                     {:type "nil"}],
                                                             :type "union",
                                                             :required true}},
                                         :additionalProperties true,
                                         :type "object",
                                         :required true}},
                    :additionalProperties true,
                    :type "object"}}
           (expanded-form songs-list types-context)))))

(deftest expansion-optional-properties-constraints
  (let [input {:properties
               {:bio {:type "string?"
                      :minLength 1}}}
        expanded (expanded-form input {})]
    (is (= {:properties {"bio" {:anyOf [{:type "string"}
                                        {:type "nil"}],
                                :type "union",
                                :minLength 1,
                                :required true}},
            :additionalProperties true,
            :type "object"}
           expanded))))

(deftest missing-facets-test
  (let [input {:type "object"
               :properties {"name" {:description "Cat name"
                                    :displayName "name"
                                    :type "string"
                                    :facets {:amazing "boolean"}
                                    :amazing true}}}
        expanded (expanded-form input {})]
    (is (= expanded
           {:properties {"name" {:description "Cat name"
                                 :displayName "name"
                                 :type "string"
                                 :amazing true
                                 :facets {:amazing {:type "boolean"}}
                                 :required true}}
            :additionalProperties true
            :type "object"}))))

(deftest default-property-type
  (let [input {:properties {:city nil}}
        expanded (expanded-form input {})]
    (is (= expanded
           {:properties {"city" {:type "string", :required true}},
            :additionalProperties true,
            :type "object"}))))
