'use strict'

const _ = require('lodash')

const isOpaqueType = require('./util').isOpaqueType

/**
 * Accepts an in-memory JSON representation of the type, the types mapping
 * and a callback function. If the invocation succeeds, it will return the
 * expanded form as an argument to the provided callback function.
 *
 * @param type {(Object|String)} The form being expanded
 * @param types {object} An object with entries mapping from user
 *                   defined RAML type names to RAML type forms
 * @param cb {Function|object} Callback or options
 */
module.exports.expandedForm = function expandedForm (type, types, cb) {
  let options = {}
  if (typeof cb === 'object') {
    options = cb
    cb = options.callback
  }

  const visited = {}
  for (const key in types) {
    if (types[key] === type) {
      visited[key] = true
      break
    }
  }

  if (cb == null) {
    return expandForm(type, types, visited, options)
  }

  setTimeout(() => {
    let result
    try {
      result = expandForm(type, types, visited, options)
    } catch (e) {
      cb(e, null)
      return
    }
    cb(null, result)
  }, 0)
}

/**
 * @param form {*} The form being expanded
 * @param bindings {object} An object with entries mapping from user
 *                   defined RAML type names to RAML type forms
 * @param visited {object} An object with properties indicating already 'visited' type names
 * @param options {object} Expansion options
 * @returns {object} - expanded form
 */
function expandForm (form, bindings, visited, options) {
  // apparently they want this
  if (typeof form === 'string') {
    try {
      JSON.parse(form)
      form = {
        type: 'json',
        content: form
      }
    } catch (e) {}
  }

  // 1. if `form` is a `String
  if (typeof form === 'string') {
    // strip parentheses around entire form
    if (/^\(.+\)$/.test(form)) {
      form = form.match(/^\((.+)\)$/)[1]
    }

    // 1.1. if `form` is a RAML built-in data type, we return `(Record "type" form)`
    if (isOpaqueType(form) || form === 'object' || form === 'array') {
      return { type: form }
    }

    if (form.endsWith('?')) {
      if (isOpaqueType(form.replace('?', ''))) {
        return expandUnion({
          type: 'union',
          anyOf: [
            { type: form.replace('?', '') },
            { type: 'nil' }
          ]
        }, bindings, visited, options)
      }
    }

    if (form.endsWith('[]')) { // Array
      const match = form.match(/^(.+)\[]$/)[1]
      return {
        type: 'array',
        items: expandForm(match, bindings, visited, options)
      }
    }

    // 1.2. if `form` is a Type Expression, we return the output of calling the algorithm
    // recursively with the parsed type expression and the provided `bindings`
    if (/^[^|\s]+(?:\|[^|\s]+)+$/.test(form.replace(/\s+/g, ''))) { // union
      const alternatives = form.split('|').map(s => s.trim())
      return expandUnion({ anyOf: alternatives, type: 'union' }, bindings, visited, options)
    }

    // 1.3. if `form` is a key in `bindings`
    if (form in bindings) {
      // 1.3.2. If the type has been traversed
      if (form in visited) {
        // 1.3.2.1. We mark the value for the current form as a fixpoint recursion: `$recur`
        // 1.3.2.2. We find the container form matching the recursion type and we wrap it into a `(fixpoint RAMLForm)` form.
        // not sure what that means
        return { type: '$recur' }
      } else {
        // 1.3.1. If the type hasn't been traversed yet, we return the output of invoking
        // the algorithm recursively with the value for `form` found in `bindings` and the
        // `bindings` mapping and we add the type to the current traverse path
        visited = Object.assign({ [form]: true }, visited)
        let type = bindings[form]
        if (options.trackOriginalType && !(typeof type === 'object')) {
          type = { type } // ensure type is in object form
        }
        type = expandForm(type, bindings, visited, options)
        // set originalType after recursive expansion to retain first type expanded
        if (options.trackOriginalType) {
          type.originalType = form
        }
        return type
      }
    }

    // 1.4. else we return an error
    throw new Error('could not resolve: ' + form)
  } else if (typeof form === 'object') {
    form = _.cloneDeep(form)
    if (Array.isArray(form)) {
      form = {
        type: form
      }
    }
    // 2. if `form` is a `Record`
    // 2.1. we initialize a variable `type`
    // 2.1.1. if `type` has a defined value in `form` we initialize `type` with that value
    // 2.1.2. if `form` has a `properties` key defined, we initialize `type` with the value `object`
    // 2.1.3. if `form` has a `items` key defined, we initialize `type` with the value `object`
    // 2.1.4. otherwise we initialise `type` with the value passed in `top-level-type`
    form.type = form.type || (form.properties && 'object') || (form.items && 'array') || options.topLevel || 'any'

    if (typeof form.type === 'string') {
      if (form.type === 'array') {
        // 2.2. if `type` is a `String` with  value `array`
        return expandArray(form, bindings, visited, options)
      } else if (form.type === 'object') {
        // 2.3 if `type` is a `String` with value `object`
        return expandObject(form, bindings, visited, options)
      } else if (form.type === 'union') {
        // 2.4. if `type` is a `String` with value `union`
        return expandUnion(form, bindings, visited, options)
      } else if (form.type in bindings) {
        // 2.5. if `type` is a `String` with value in `bindings`
        form = expandNested(form, bindings, visited, options)
        form.type = expandForm(form.type, bindings, visited, options)
      } else {
        form = Object.assign(form, expandForm(form.type, bindings, visited, options))
      }
    } else if (Array.isArray(form.type)) {
      // 2.7. if `type` is a `Seq[RAMLForm]`
      form = expandNested(form, bindings, visited, options)
      form.type = form.type.map(t => expandForm(t, bindings, visited, options))
    } else if (typeof form.type === 'object') {
      // 2.6. if `type` is a `Record`
      form = expandNested(form, bindings, visited, options)
      form.type = expandForm(form.type, bindings, visited, options)
    } else {
      form = Object.assign(form, expandForm(form.type, bindings, visited, options))
    }

    if (form.facets != null) {
      _.each(form.facets, (propValue, propName) => {
        form.facets[propName] = expandForm(propValue, bindings, visited, options)
      })
    }

    return form
  }

  throw new Error('form can only be a string or an object')
}

function expandNested (form, bindings, visited, options) {
  if (form.properties !== undefined) form = expandObject(form, bindings, visited, options)
  if (form.anyOf !== undefined) form = expandUnion(form, bindings, visited, options)
  if (form.items !== undefined) form = expandArray(form, bindings, visited, options)
  return form
}

function expandArray (form, bindings, visited, options) {
  form.items = expandForm(form.items || 'any', bindings, visited, options)
  return form
}

function expandObject (form, bindings, visited, options) {
  const props = form.properties
  for (let propName in props) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) continue

    const expandedPropVal = expandForm(props[propName] || 'any', bindings, visited, options)
    if (propName.endsWith('?')) {
      delete props[propName]
      propName = propName.slice(0, -1)
      expandedPropVal.required = false
    }
    if (expandedPropVal.required === undefined) {
      expandedPropVal.required = true
    }
    props[propName] = expandedPropVal
  }
  if (form.additionalProperties === undefined) {
    form.additionalProperties = true
  }
  return form
}

function expandUnion (form, bindings, visited, options) {
  form.anyOf = form.anyOf.map(elem => expandForm(elem, bindings, visited, options))
  return form
}
