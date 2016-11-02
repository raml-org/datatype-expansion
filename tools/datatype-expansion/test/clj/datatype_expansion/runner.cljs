(ns datatype-expansion.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [datatype-expansion.expanded-form-test]
            [datatype-expansion.canonical-form-test]
            [datatype-expansion.integration-test]))

(doo-tests 'datatype-expansion.expanded-form-test
           'datatype-expansion.canonical-form-test
           'datatype-expansion.integration-test)
