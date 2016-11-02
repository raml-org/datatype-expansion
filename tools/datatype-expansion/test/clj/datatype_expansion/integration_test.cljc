(ns datatype-expansion.integration-test
  #?(:cljs (:require-macros [cljs.test :refer [deftest is]]))
  (:require #?(:clj [cheshire.core :as json])
            #?(:clj [clojure.test :refer :all])
            #?(:cljs [cljs.nodejs :as nodejs])
            [datatype-expansion.expanded-form :refer [expanded-form]]
            [datatype-expansion.canonical-form :refer [canonical-form]]
            [clojure.walk :refer [keywordize-keys]]))

(defn decode [json-data]
  #?(:cljs (js->clj (.parse js/JSON json-data))
     :clj (json/parse-string json-data)))

(defn read-file [path]
  #?(:cljs (.toString (.readFileSync (nodejs/require "fs") path))
     :clj (slurp path)))


(def world-music (->> (-> "resources/world_music.json" read-file decode)
                      (map (fn [[type data]]
                             [type (keywordize-keys data)]))
                      (into {})))


(deftest world-music-test
  (try
    (doseq [[k v] world-music]
      (let [expanded (expanded-form (get world-music k) world-music)
            canonical (canonical-form expanded)]
        (is (not (nil? canonical)))))
    (catch #?(:clj Exception :cljs js/Error) e
      (is (nil? e)))))
