'use strict'

const _ = require('lodash')

// scalar types + [any, xml, json], excludes [array, object, union]
const opaqueTypes = _.keyBy([
  'any',
  'boolean',
  'date-only',
  'datetime',
  'datetime-only',
  'time-only',
  'number',
  'integer',
  'string',
  'nil',
  'file',
  'xml',
  'json'
])

module.exports.isOpaqueType = function isOpaqueType (type) {
  return type in opaqueTypes
}

/**
 * Iterates through all the possible restriction constraints defined in the RAML specification and checks that the constraints hold for the provided type using custom logic.
 * If any of the restrictions involved in the check are not defined, it automatically succeeds.
 *
 * @param form - the Form to check
 * @returns {Object}
 */
module.exports.consistencyCheck = function consistencyCheck (form) {
  const err = (name, a, b) => {
    throw new Error(`Consistency check failure for property ${name} and values [${a} ${b}]`)
  }
  if (form.minProperties !== undefined &&
      form.maxProperties !== undefined &&
      form.minProperties > form.maxProperties) {
    err('numProperties', form.minProperties, form.maxProperties)
  }
  if (form.minLength !== undefined &&
      form.maxLength !== undefined &&
      form.minLength > form.maxLength) {
    err('length', form.minLength, form.maxLength)
  }
  if (form.minimum !== undefined &&
      form.maximum !== undefined &&
      form.minimum > form.maximum) {
    err('size', form.minimum, form.maximum)
  }
  if (form.minItems !== undefined &&
      form.maxItems !== undefined &&
      form.minItems > form.maxItems) {
    err('numItems', form.minItems, form.maxItems)
  }
  return form
}
