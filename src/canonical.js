'use strict'

const _ = require('lodash')

/*
  Accepts a JSON in-memory representation of an expanded RAML type and a
  callback function. Callback function should accept two arguments: error
  and canonical form object.
*/
module.exports.canonicalForm = function canonicalForm (expForm, cb) {
  try {
    cb(null, toCanonical(expForm))
  } catch (e) {
    cb(e, null)
  }
}

// TODO: is this really correct?
const types = [
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

/**
 * @param form - the (previously) expanded form
 * @returns {*}
 */
function toCanonical (form) {
  form = _.cloneDeep(form) // just to be on the safe side

  // 1. we initialize the variable type with the value of the property `type` of `expanded-form`
  const type = form.type

  if (type in types) {
    // 2. if `type` is in the set `any boolean datetime datetime-only number integer string null file xml json`
    // 2.1. we return the output of applying the `consistency-check` to the `form`
    return consistencyCheck(form)
  } else if (type === 'array') {
    // 3. if `type` is the string `array`
    // 3.1. we initialize the variable `items` with the output of applying the algorithm to the value of the key `items` of the input `form` of type `Record[String]RAMLForm]`
    const items = toCanonical(form.items)
    const node = consistencyCheck(form)
    // 3.2. we initialize the variable `items-type` with the value of the `type` property of the `items` variable
    const itemsType = items.type
    // 3.3. if `items-type` has a value `array`
    if (itemsType === 'array') { // TODO: double-check
      // 3.3.1. we replace the property `items` in `form` with the value of `items` variable
      node.items = items
      // 3.3.2. we return the output of applying the `consistency-check` algorithm to the new value of `form`
      return consistencyCheck(node)
    }
    // 3.4. if `items-type` has a value `union`
    if (itemsType === 'union') { // TODO: double-check
      // 3.4.1. for each value `elem` in position `i` of the property `of` in `items-type`
      // 3.4.1.3. we replace the element `i` in the property `of` in `items-type` with the modified value in `union-array`
      items.anyOf = items.anyOf.map((elem) => {
        // 3.4.1.1. we initialize the variable `union-array` cloning the value of `form`
        const unionArray = _.cloneDeep(node)
        // 3.4.1.2. we replace the property `items` of the cloned value in `union-array` with `elem`
        unionArray.items = elem
        // 3.4.1.4. we return the output of applying the `consistency-check` algorithm to `items-type`
        return unionArray
      })
      return items
    }
  } else if (type === 'object') {
    // 4. if `type` is the string `object`
    // 4.1. we initialize the variable properties with the value of the `properties` key in `form`
    const properties = form.properties
    // 4.2. we initialize the variable `accum` with the cloned value of `form`
    let accum = [_.cloneDeep(form)]
    // 4.3. we reset the key `properties` in `accum` to an empty record
    accum[0].properties = {}
    // 4.4. for each pair `property-name` and `property-value` in the variable `properties`
    _.each(properties, (propValue, propName) => {
      // 4.4.1. we initialize the variable `tmp` with the output of invoking the algorithm over the value in `property-value`
      const tmp = toCanonical(propValue)
      if (tmp.type === 'union') {
        // 4.4.3. if the property `type` of `tmp` has the value `union`
        // 4.4.3.1. we initialize the variable `new-accum` to the empty sequence
        const newAccum = []
        // 4.4.3.2. for each value `elem-of` in the property `of` of `tmp`
        tmp.anyOf.forEach((elemOf) => {
          // 4.4.3.2.1. for each value `elem` in `accum`
          elemOf.required = tmp.required
          for (let elem of accum) {
            // 4.4.3.2.1.1. we clone `elem`
            elem = _.cloneDeep(elem)
            // 4.4.3.2.1.2. we add the pair `property-name` `elem-of` to the key `properties` of the cloned`elem`
            elem.properties[propName] = elemOf
            // 4.4.3.2.1.3. we add the cloned  `elem` to the sequence `new-new-accum`
            newAccum.push(elem)
          }
        })
        // 4.4.3.3. we replace `accum` with `new-accum`
        accum = newAccum
      } else {
        // 4.4.2. if the property `type` of `tmp` has the value `object`
        // 4.4.2.1. we add the pair `property-name` `tmp` to the `properties` keys in each record in `accum`
        accum = accum.map((elem) => {
          elem.properties[propName] = tmp
          return elem
        })
      }
    })
    if (accum.length === 1) {
      // 4.4.4. if `accum` contains a single element
      // 4.4.4.1. we return  the output of applying the `consistency-check` algorithm to the only element in `accum`
      return consistencyCheck(accum[0])
    } else if (accum.length > 1) {
      // 4.4.5. if `accum` contains more than one element
      // 4.4.5.1. we replace the `type` of `form` with `union`
      form.type = 'union'
      // 4.4.5.2. we remove the key `properties`
      delete form.properties
      // 4.4.5.3. we add the key `of` with the value of `accum`
      form.anyOf = accum
      // 4.4.5.4. we return  the output of applying the `consistency-check` algorithm to the modified value of `form`
      return consistencyCheck(form)
    }
  } else if (typeof type === 'object') {
    // 5. & 6. ?
    // TODO: not correct/complete
    const superTypeName = findClass(form)
    if (Array.isArray(type)) {
      // TODO
    } else {
      const superType = toCanonical(type)
      let subType = _.cloneDeep(form)
      subType.type = superTypeName
      switch (superTypeName) {
        case 'object':
          subType.properties = subType.properties || {}
          break
        case 'array':
          subType.items = subType.items || {
            type: 'any'
          }
          break
        case 'union':
          subType.anyOf = subType.anyOf || []
          break
      }
      subType = toCanonical(subType)
      return consistencyCheck(lt(superType, subType))
    }
  }

  return form
}

function lt (superForm, sub) {
  return superForm
}

function findClass (form) {
  if (form.properties !== undefined) return 'object'
  if (form.items !== undefined) return 'array'
  if (typeof form.type === 'string') return form.type
  if (typeof form.type === 'object') {
    if (Array.isArray(form.type)) {
      const type = form.type.map((node) => {
        try {
          return findClass(node)
        } catch (e) {
          return null
        }
      }).filter(type => type !== null)[0]
      if (type !== undefined) {
        return type
      }
    } else {
      return findClass(form.type)
    }
  }
  throw new Error('Cannot find top level class for node, not in expanded form')
}

function consistencyCheck (form) {
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
