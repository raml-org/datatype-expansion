(defproject datatype-expansion "0.0.12"
  :description "Utility to expand RAML Data Types into a single canonical form"
  :license {:name "Apache License 2.0"
            :url "http://www.apache.org/licenses/"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.14"]
                 [org.clojure/core.async "0.2.374"]
                 [instaparse "1.4.2"]
                 [com.lucasbradstreet/instaparse-cljs "1.4.1.2"]]
  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-doo "0.1.6"]]

  :aot [datatype-expansion.expanded-form
        datatype-expansion.canonical-form]

  :source-paths ["src/clj"]

  :test-paths ["test/clj"]

  :clean-targets ^{:protect false} ["resources/js" "node" :target]

  :cljsbuild {:builds {:default {:source-paths ["src/clj"]
                                 :figwheel true
                                 :compiler {:main datatype-expansion.js
                                            :output-dir "node"
                                            :output-to "node/index.js"
                                            :optimizations :none,
                                            :source-map true,
                                            :source-map-timestamp true,
                                            :recompile-dependents false,
                                            :pretty-print true
                                            :target :nodejs}}
                       :test    {:source-paths ["src/clj" "test/clj"]
                                 :compiler {:output-to "resources/js/main-test.js"
                                            :main datatype-expansion.runner
                                            :pretty-print true
                                            :target :nodejs}}}})
