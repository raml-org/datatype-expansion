(ns datatype-expansion.utils-macros-clj
  (:require [clojure.core.async :refer [<!!]]))

(defmacro async [s body]
  `(let [~s (fn [] true)
         res# ~body
         finalres# (<!! res#)]
     (when (some? (:err finalres#))
       (throw (Exception. (str (:err finalres#)))))
     (when (instance? Throwable finalres#)
       (throw finalres#))))

;; Wrapping things that might go go with a NULL
(defmacro maybe [f]
  `(try ~f (catch Throwable e# nil)))

(defmacro check [name a b & fs]
  `(if (and (some? ~a) (some? ~b))
     (if (do ~@fs)
       true
       (throw (Exception. (str "Consistency check failure for property " ~name " and values [" ~a " " ~b "]"))))
     true))
