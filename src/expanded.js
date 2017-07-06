'use strict'

const _ = require('lodash')

/**
 * Accepts an in-memory JSON representation of the type, the types mapping
 * and a callback function. If the invocation succeeds, it will return the
 * expanded form as an argument to the provided callback function.
 *
 * @param {(object|String)} type
 * @param {Array} types
 * @param {function} cb
 */
module.exports.expandedForm = function expandedForm (type, types, cb) {
  cb(null, expandForm(type, types, []))
}

const types = [
  'string',
  'number',
  'integer',
  'boolean',
  'date-only',
  'time-only',
  'datetime-only',
  'datetime',
  'file',
  'nil'
]

// TODO: topLevel
/**
 * https://raw.githubusercontent.com/raml-org/raml-parser-toolbelt/master/tools/datatype-expansion/doc/algorithms.md
 *
 * @param form {*} The form being expanded
 * @param bindings {Array} A `Record` from `String` into `RAMLForm` holding a mapping from user
 *                   defined RAML type names to RAML type forms.
 * @param context {Array} Context of already 'visited' types
 * @param topLevel {String} [topLevel=any] a `String` with the default RAML type whose base type is not
 *                   explicit and cannot be inferred, it can be `any` or `string`
 *                   depending if the the type comes from the `body` of RAML service
 * @returns {object} - expanded form
 */
function expandForm (form, bindings, context, topLevel) {
  topLevel = topLevel || 'any'
  // console.log({form, context})
  form = _.cloneDeep(form)

  // 1. if `form` is a `String
  if (typeof form === 'string') {
    // 1.1. if `form` is a RAML built-in data type, we return `(Record "type" form)`
    if (types.includes(form)) {
      return {type: form}
    }
    // 1.2. if `form` is a Type Expression, we return the output of calling the algorithm
    // recursively with the parsed type expression and the provided `bindings`
    if (/^[\w\d]*\s*(?:\|\s*[\w\d]*)+$/.test(form)) { // union
      const options = form.split('|').map(s => s.trim())
      return {
        anyOf: options.map(o => expandForm(o, bindings, context)),
        type: 'union'
      }
    }

    if (form.endsWith('[]')) { // Array
      const match = form.match(/^(.+)\[]$/)[1]
      return {
        type: 'array',
        items: expandForm(match, bindings, context)
      }
    }

    // 1.3. if `form` is a key in `bindings`
    if (form in bindings) {
      // 1.3.2. If the type has been traversed
      if (context.includes(form)) {
        // 1.3.2.1. We mark the value for the current form as a fixpoint recursion: `$recur`
        // 1.3.2.2. We find the container form matching the recursion type and we wrap it into a `(fixpoint RAMLForm)` form. TODO: ??
        return {type: '$recur'}
      } else {
        // 1.3.1. If the type hasn't been traversed yet, we return the output of invoking
        // the algorithm recursively with the value for `form` found in `bindings` and the
        // `bindings` mapping and we add the type to the current traverse path
        return expandForm(bindings[form], bindings, context.concat([form]))
      }
    }

    // 1.4. else we return an error
    // TODO: not tested
    throw new Error('could not resolve: ' + form)
  } else if (typeof form === 'object') {
    // 2. if `form` is a `Record`
    // 2.1. we initialize a variable `type`
    // 2.1.1. if `type` has a defined value in `form` we initialize `type` with that value
    // 2.1.2. if `form` has a `properties` key defined, we initialize `type` with the value `object`
    // 2.1.3. if `form` has a `items` key defined, we initialize `type` with the value `object`
    // 2.1.4. otherwise we initialise `type` with the value passed in `top-level-type`
    form.type = form.type || (form.properties && 'object') || (form.items && 'array') || topLevel
    // TODO: `Seq[RAMLForm]`

    // 2.2. if `type` is a `String` with  value `array`
    if (form.type === 'array') {
      return expandArray(form, bindings, context)
    } else if (form.type === 'object') {
      // 2.3 if `type` is a `String` with value `object`
      return expandObject(form, bindings, context)
    } else if (form.type === 'union') {
      // 2.4. if `type` is a `String` with value `union`
      // TODO: not tested
      return expandUnion(form, bindings, context)
    } else if (form.type in bindings) {
      // TODO: ?
      form = expandObject(form, bindings, context.concat([form.type]))
      form.type = expandForm(form.type, bindings, context)
      return form
    } else if (typeof form.type === 'object') {
      // 2.5. if `type` is a `Record`
      // 2.5.1. we return the output of invoking the algorithm on the value of `type` with the current value for `bindings`
      if (form.properties !== undefined) form = expandObject(form, bindings, context)
      form.type = expandForm(form.type, bindings, context)
      return form
    } else {
      // weird stuff
      form = Object.assign(form, expandForm(form.type, bindings, context))
    }

    return form
  }

  // TODO: not tested
  throw new Error('form can only be a string or an object')
}

function expandArray (form, bindings, context) {
  form.items = expandForm(form.items, bindings, context)
  return form
}

function expandObject (form, bindings, context) {
  // console.log('objform', form)
  const props = form.properties
  for (let propName in props) {
    if (!props.hasOwnProperty(propName)) continue

    let expandedPropVal = expandForm(props[propName], bindings, context)
    // TODO: not tested
    if (propName.endsWith('?')) {
      delete props[propName]
      propName = propName.slice(0, -1)
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

// TODO
function expandUnion (form, bindings, context) {
  // TODO: not tested
  return form
}
