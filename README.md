# raml-parser-toolbelt
This repository contains helpful libraries to work with the RAML parser.

## RAML type expanded form

The RAML expanded form for a RAML type, resolves references and fills missing information to compute a fully expanded representation of the type.
The form and the algorithm to compute is [documented here](doc/algorithms.md).

### Usage Clojure

The Clojure interface for the library offers a function to compute the expanded form using the `raml-parser-toolbelt.expanded-form/expanded-form` function.
The function accepts an in-memory representation of the RAML type (keywordize) and a map from type names to types with the same representation.
It returns the expanded form.

The following example shows a usage example:

``` clojure
;; A type context with some types definitions
(def types-context {"Songs.Song" {:properties {:title "string"
                                               :length "number"}}
                    "Songs.Album" {:properties {:title "string"
                                                :songs "Songs.Song[]"}}})

(is (= (raml-parser-toolbelt.expanded-form/expanded-form (get types-context "Songs.Album") types-context)
       {:type "object"
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
        :required true}))
```

### Usage Node.js

The Node.js interface for the library offers the `expandedForm` function to compute the expanded form.
It accepts an in-memory JSON representation of the type, the types mapping and a callback function.
If the invocation succeeds, it will return the expanded form as an argument to the provided callback function.

``` javascript
var tools = require("raml-parser-toolbelt");

var typesContext = {"Songs.Song": {"properties": {"title": "string",
                                                 "length": "number"}},
                    "Songs.Album": {"properties": {"title": "string",
                                                   "songs": "Songs.Song[]"}}};
tools.expandedForm(typesContext["Sonts.Album"], typesContext, function(err, expanded) {
  // expanded contains the computed expanded form
  //{
  //  "properties": {
  //    "title": {
  //      "type": "string",
  //      "required": true
  //    },
  //    "songs": {
  //      "type": "array",
  //      "items": {
  //        "properties": {
  //          "title": {
  //            "type": "string",
  //            "required": true
  //          },
  //          "length": {
  //            "type": "number",
  //            "required": true
  //          }
  //        },
  //        "additionalProperties": true,
  //        "type": "object",
  //        "required": true
  //      },
  //      "required": true
  //    }
  //  },
  //  "additionalProperties": true,
  //  "type": "object",
  //  "required": true
  //}
  console.log(expanded);
});
```

## RAML type canonical form

The canonical form computes inheritance and pushes unions to the top level of the type structure of an expanded RAML type. It is described in the [documentation section](doc/algorithms.md) of this repository.

### Usage Clojure

The Clojure interface to compute the canonical form is implemented in the `raml-parser-toolbelt.canonical-form/canonical-form` function.
The function accepts and expanded RAML type and returns the canonical form for the same type.

``` clojure
;; A type context with some types definitions
(def types-context {"Songs.Song" {:properties {:title "string"
                                               :length "number"}}
                    "Songs.Album" {:properties {:title "string"
                                                :songs "Songs.Song[]"}}})

(-> types-context
    (get "Songs.Song")
    (raml-parser-toolbelt.expanded-form/expanded-form types-context)
    raml-parser-toolbelt.canonical-form/canonical-form)
```

### Usage Node.js

The Node.js version of the canonical form function is defined in the `canonicalForm` function of the library module.
It accepts a JSON in-memory representation of an expanded RAML type and a callback function. It returns the canonical form or an exception:

``` javascript
var tools = require("raml-parser-toolbelt");

var typesContext = {"Songs.Song": {"properties": {"title": "string",
                                                 "length": "number"}},
                    "Songs.Album": {"properties": {"title": "string",
                                                   "songs": "Songs.Song[]"}}};
tools.expandedForm(typesContext["Songs.Album"], typesContext, function(err, expanded) {

   tools.canonicalForm(expanded, function(err, canonical) {
    // canonical contains the computed canonical form
    console.log(canonical);
   });

});
```

## Running tests

Tests for the library can be run for the clojure version using leiningen:

``` shell
$ lein test
```

The JavaScript tests can be run with the following leiningen invocation:

``` shell
$ lein doo node test
```


## Building the NPM package

The ClojureScript code of the library can be packaged as a NPM library using the following leiningen comand:

``` shell
$ lein cljsbuild once default
```

This command will compile the ClojureScript code into JavaScript code that can be published as a NPM package using the provided `packages.json` file.
