'use strict'

const _ = require('lodash')

const isOpaqueType = require('./util').isOpaqueType

/**
 * Accepts an in-memory JSON representation of the type, the types mapping
 * and a callback function. If the invocation succeeds, it will return the
 * expanded form as an argument to the provided callback function.
 *
 * @param type {(Object|String)} The form being expanded
 * @param types {Array} A `Record` from `String` into `RAMLForm` holding a mapping from
 *                      user defined RAML type names to RAML type forms.
 * @param cb {Function} Callback
 */
module.exports.expandedForm = function expandedForm (type, types, cb) {
  const keys = Object.keys(types)
  const typename = keys[keys.map(t => types[t]).indexOf(type)]

  if (cb == null) {
    return expandForm(type, types, typename ? [typename] : [])
  }

  setTimeout(() => {
    let result
    try {
      result = expandForm(type, types, typename ? [typename] : [])
    } catch (e) {
      cb(e, null)
      return
    }
    cb(null, result)
  }, 0)
}

/**
 * @param form {*} The form being expanded
 * @param bindings {Array} A `Record` from `String` into `RAMLForm` holding a mapping from user
 *                   defined RAML type names to RAML type forms.
 * @param context {Array} Context of already 'visited' types
 * @param topLevel {String=} a `String` with the default RAML type whose base type is not
 *                   explicit and cannot be inferred, it can be `any` or `string`
 *                   depending if the the type comes from the `body` of RAML service
 * @returns {object} - expanded form
 */
function expandForm (form, bindings, context, topLevel) {
  topLevel = topLevel || 'any'
  form = _.cloneDeep(form)

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
    if (/^\(.+\)$/.test(form)) {
      form = form.match(/^\((.+)\)$/)[1]
    }

    // 1.1. if `form` is a RAML built-in data type, we return `(Record "type" form)`
    if (isOpaqueType(form) || form === 'object' || form === 'array') {
      return {type: form}
    }

    if (form.endsWith('?')) {
      if (isOpaqueType(form.replace('?', ''))) {
        return expandUnion({
          type: 'union',
          anyOf: [
            {type: form.replace('?', '')},
            {type: 'nil'}
          ]
        }, bindings, context)
      }
    }

    if (form.endsWith('[]')) { // Array
      const match = form.match(/^(.+)\[]$/)[1]
      return {
        type: 'array',
        items: expandForm(match, bindings, context)
      }
    }

    // 1.2. if `form` is a Type Expression, we return the output of calling the algorithm
    // recursively with the parsed type expression and the provided `bindings`
    if (/^[^\s|]*(?:\s*\|\s*[^\s|]*)+$/.test(form)) { // union
      const options = form.split('|').map(s => s.trim())
      return expandUnion({anyOf: options, type: 'union'}, bindings, context)
    }

    // 1.3. if `form` is a key in `bindings`
    if (form in bindings) {
      // 1.3.2. If the type has been traversed
      if (context.indexOf(form) !== -1) {
        // 1.3.2.1. We mark the value for the current form as a fixpoint recursion: `$recur`
        // 1.3.2.2. We find the container form matching the recursion type and we wrap it into a `(fixpoint RAMLForm)` form.
        // not sure what that means
        return {type: '$recur'}
      } else {
        // 1.3.1. If the type hasn't been traversed yet, we return the output of invoking
        // the algorithm recursively with the value for `form` found in `bindings` and the
        // `bindings` mapping and we add the type to the current traverse path
        return expandForm(bindings[form], bindings, context.concat([form]))
      }
    }

    // 1.4. else we return an error
    throw new Error('could not resolve: ' + form)
  } else if (typeof form === 'object') {
    // 2. if `form` is a `Record`
    // 2.1. we initialize a variable `type`
    // 2.1.1. if `type` has a defined value in `form` we initialize `type` with that value
    // 2.1.2. if `form` has a `properties` key defined, we initialize `type` with the value `object`
    // 2.1.3. if `form` has a `items` key defined, we initialize `type` with the value `object`
    // 2.1.4. otherwise we initialise `type` with the value passed in `top-level-type`
    form.type = form.type || (form.properties && 'object') || (form.items && 'array') || topLevel

    if (typeof form.type === 'string') {
      if (form.type === 'array') {
        // 2.2. if `type` is a `String` with  value `array`
        return expandArray(form, bindings, context)
      } else if (form.type === 'object') {
        // 2.3 if `type` is a `String` with value `object`
        return expandObject(form, bindings, context)
      } else if (form.type === 'union') {
        // 2.4. if `type` is a `String` with value `union`
        return expandUnion(form, bindings, context)
      } else if (typeof form.type === 'string' && form.type in bindings) {
        if (form.properties !== undefined) form = expandObject(form, bindings, context)
        form.type = expandForm(form.type, bindings, context)
      } else {
        form = Object.assign(form, expandForm(form.type, bindings, context))
      }
    } else if (Array.isArray(form.type)) {
      form.type = form.type.map(t => expandForm(t, bindings, context))
      if (form.properties !== undefined) form = expandObject(form, bindings, context)
      if (form.items !== undefined) form = expandArray(form, bindings, context)
    } else if (typeof form.type === 'object') {
      // 2.5. if `type` is a `Record`
      // 2.5.1. we return the output of invoking the algorithm on the value of `type` with the current value for `bindings`
      if (form.properties !== undefined) form = expandObject(form, bindings, context)
      if (form.anyOf !== undefined) form = expandUnion(form, bindings, context)
      if (form.items !== undefined) form = expandArray(form, bindings, context)
      form.type = expandForm(form.type, bindings, context)
    } else {
      form = Object.assign(form, expandForm(form.type, bindings, context))
    }

    if (form.facets != null) {
      _.each(form.facets, (propValue, propName) => {
        form.facets[propName] = expandForm(propValue, bindings, context)
      })
    }

    return form
  }

  throw new Error('form can only be a string or an object')
}

function expandArray (form, bindings, context) {
  form.items = expandForm(form.items || 'any', bindings, context)
  return form
}

function expandObject (form, bindings, context) {
  const props = form.properties
  for (let propName in props) {
    if (!props.hasOwnProperty(propName)) continue

    let expandedPropVal = expandForm(props[propName] || 'any', bindings, context)
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

function expandUnion (form, bindings, context) {
  form.anyOf = form.anyOf.map(elem => expandForm(elem, bindings, context))
  return form
}
