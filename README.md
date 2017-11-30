# RAML Data Type Expansion
[![Build Status](https://travis-ci.org/raml-org/datatype-expansion.svg?branch=master)](https://travis-ci.org/raml-org/datatype-expansion) 
[![Coverage Status](https://coveralls.io/repos/github/raml-org/datatype-expansion/badge.svg?branch=master)](https://coveralls.io/github/raml-org/datatype-expansion?branch=master)

> Often, tools need the full expansion of RAML data types where there are no references. This module gives you a utility tool to expand a given type and create a canonical form.

## Installation

### NPM

```
npm install datatype-expansion
```

## RAML type expanded form

The RAML expanded form for a RAML type, resolves references and fills missing information to compute a fully expanded representation of the type.
The form and the algorithm to compute is [documented here](doc/algorithms.md).

### Usage

The Node.js interface for the library offers the `expandedForm` function to compute the expanded form.
It accepts an in-memory JSON representation of the type, the types mapping and a callback function.
If the invocation succeeds, it will return the expanded form as an argument to the provided callback function.

#### Sync API
```js
const tools = require('datatype-expansion');

const typesContext = {
  Song: {
    properties: {
      title: 'string',
      length: 'number'
    }
  },
  Album: {
    properties: {
      title: 'string',
      songs: 'Songs.Song[]'
    }
  }
};
const expanded = tools.expandedForm(typesContext['Album'], typesContext)
console.log(JSON.stringify(expanded,null,2));
```

#### Callback API
```js
const tools = require('datatype-expansion');

const typesContext = {
  Song: {
    properties: {
      title: 'string',
      length: 'number'
    }
  },
  Album: {
    properties: {
      title: 'string',
      songs: 'Songs.Song[]'
    }
  }
};
tools.expandedForm(typesContext['Album'], typesContext, function(err, expanded) {
  // expanded contains the computed expanded form
  console.log(JSON.stringify(expanded,null,2));
});
```

#### Result
```json
{
  "properties": {
    "title": {
      "type": "string",
      "required": true
    },
    "songs": {
      "type": "array",
      "items": {
        "properties": {
          "title": {
            "type": "string",
            "required": true
          },
          "length": {
            "type": "number",
            "required": true
          }
        },
        "additionalProperties": true,
        "type": "object",
        "required": true
      },
      "required": true
    }
  },
  "additionalProperties": true,
  "type": "object",
  "required": true
}
```

## RAML type canonical form

The canonical form computes inheritance and pushes unions to the top level of the type structure of an expanded RAML type. It is described in the [documentation section](doc/algorithms.md) of this repository.

### Usage

The Node.js version of the canonical form function is defined in the `canonicalForm` function of the library module.
It accepts a JSON in-memory representation of an expanded RAML type and an optional callback function or options object. It returns the canonical form or an exception. The following options are supported:

* `callback`: Provides a callback function via the options object.
* `hoistUnions` (default: `true`): Controls whether canonicalization should hoist unions to the top level of the type form. When enabled, `union` can only appear as the top-level type, and the associated type alternatives are the permutation of any nested unions in the input type. When disabled, unions remain nested.

#### Sync API
```js
const tools = require('datatype-expansion');

const typesContext = {
  SimpleUnion: {
    properties: {
      a: 'string',
      b: 'number | string'
    }
  },
};
const expanded = tools.expandedForm(typesContext['SimpleUnion'], typesContext)
const canonical = tools.canonicalForm(expanded)
console.log(JSON.stringify(canonical,null,2));
```

#### Callback API
```js
const tools = require('datatype-expansion');

const typesContext = {
  SimpleUnion: {
    properties: {
      a: 'string',
      b: 'number | string'
    }
  },
};
tools.expandedForm(typesContext['Songs.Album'], typesContext, function(err, expanded) {
   tools.canonicalForm(expanded, function(err, canonical) {
    // canonical contains the computed canonical form
    console.log(canonical);
   });
});
```

#### Result
```json
{
  "type": "union",
  "additionalProperties": true,
  "anyOf": [
    {
      "properties": {
        "a": {
          "type": "string",
          "required": true
        },
        "b": {
          "type": "number",
          "required": true
        }
      },
      "type": "object",
      "additionalProperties": true
    },
    {
      "properties": {
        "a": {
          "type": "string",
          "required": true
        },
        "b": {
          "type": "string",
          "required": true
        }
      },
      "type": "object",
      "additionalProperties": true
    }
  ]
}
```

## Browser usage

Include it via unpkg ( if you don't use a bundler like webpack )
```html
<script src="https://unpkg.com/datatype-expansion"></script>
```

It gets exported as `expansion`
```js
expansion.expandedForm('string', {})
```

## Running tests

Tests for the library can be run using:

``` shell
$ npm run test
```
