(ns raml-parser-toolbelt.js
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [raml-parser-toolbelt.expanded-form :as expanded]
            [raml-parser-toolbelt.canonical-form :as canonical]
            [cljs.core.async  :refer [<!]]
            [clojure.walk :refer [keywordize-keys]]))

(enable-console-print!)

(defn ^:export expandedForm [type-form typing-context cb]
  (go (try
        (let [type-form (-> type-form js->clj keywordize-keys)
              typing-context (-> typing-context
                                 js->clj
                                 (->> (map (fn [[k v]] [k (keywordize-keys v)]))
                                      (into {})))
              result (expanded/expanded-form (js->clj type-form) (js->clj typing-context))]
          (cb nil (clj->js result)))
        (catch js/Error error
          (cb error nil))))
  nil)

(defn ^:export canonicalForm [expanded-form cb]
  (go (try
        (let [expanded-form (-> expanded-form js->clj keywordize-keys)
              result (canonical/canonical-form expanded-form)]
          (cb nil (clj->js result)))
        (catch js/Error error
          (cb error nil))))
  nil)

(defn -registerInterface [] nil)

(set! *main-cli-fn* -registerInterface)
