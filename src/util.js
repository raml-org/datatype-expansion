// TODO: is this correct?
module.exports.types = [
  'any',
  'boolean',
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
]

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
