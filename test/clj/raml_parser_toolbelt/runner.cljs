(ns raml-parser-toolbelt.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [raml-parser-toolbelt.expanded-form-test]
            [raml-parser-toolbelt.canonical-form-test]))

(doo-tests 'raml-parser-toolbelt.expanded-form-test
           'raml-parser-toolbelt.canonical-form-test)
