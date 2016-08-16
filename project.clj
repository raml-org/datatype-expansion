(defproject raml-parser-toolbelt "0.0.1-SNAPSHOT"
  :description "Utilities for the RAML parser"
  :license {:name "Apache License 2.0"
            :url "http://www.apache.org/licenses/"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.14"]
                 [org.clojure/core.async "0.2.374"]
                 [instaparse "1.4.2"]
                 [com.lucasbradstreet/instaparse-cljs "1.4.1.2"]]
  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-doo "0.1.6"]]

  :aot [raml-parser-toolbelt.expanded-form
        raml-parser-toolbelt.canonical-form]

  :source-paths ["src/clj"]

  :test-paths ["test/clj"]

  :clean-targets ^{:protect false} ["resources/js" "node" :target]

  :cljsbuild {:builds {:default {:source-paths ["src/clj"]
                                 :figwheel true
                                 :compiler {:main raml-parser-toolbelt.js
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
                                            :main raml-parser-toolbelt.runner
                                            :pretty-print true
                                            :target :nodejs}}}})
