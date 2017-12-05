'use strict'

const _ = require('lodash')

const minType = require('./minType')
const consistencyCheck = require('./util').consistencyCheck
const isOpaqueType = require('./util').isOpaqueType

/**
 * Accepts a JSON in-memory representation of an expanded RAML type and a
 * callback function. Callback function should accept two arguments: error
 * and canonical form object.
 *
 * @param expForm {object} the (previously) expanded form
 * @param cb {Function|object} callback or options
 */
module.exports.canonicalForm = function canonicalForm (expForm, cb) {
  let options = {}
  if (typeof cb === 'object') {
    options = cb
    cb = options.callback
  }
  if (cb == null) {
    return toCanonical(expForm, options)
  }

  setTimeout(() => {
    let result
    try {
      result = toCanonical(expForm, options)
    } catch (e) {
      cb(e, null)
      return
    }
    cb(null, result)
  }, 0)
}

function toCanonical (form, options) {
  form = _.cloneDeep(form) // just to be on the safe side

  // 1. we initialize the variable type with the value of the property `type` of `expanded-form`
  const type = form.type

  if (isOpaqueType(type)) {
    // 2. if `type` is in the set `any boolean datetime datetime-only number integer string null file xml json`
    // 2.1. we return the output of applying the `consistency-check` to the `form`
    return consistencyCheck(form)
  } else if (type === 'array') {
    // 3. if `type` is the string `array`
    // 3.1. we initialize the variable `items` with the output of applying the algorithm to the value of the key `items` of the input `form` of type `Record[String]RAMLForm]`
    const items = toCanonical(form.items || {type: 'any'}, options)
    const node = consistencyCheck(form)
    // 3.2. we initialize the variable `items-type` with the value of the `type` property of the `items` variable
    const itemsType = items.type
    // 3.3. if `items-type` has a value `array`
    if (itemsType === 'array') {
      // 3.3.1. we replace the property `items` in `form` with the value of `items` variable
      node.items = items
      // 3.3.2. we return the output of applying the `consistency-check` algorithm to the new value of `form`
      return consistencyCheck(node)
    }
    // 3.4. if `items-type` has a value `union`
    if (itemsType === 'union') {
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
      if (typeof form.required === 'boolean') {
        items.required = form.required
      }
      return items
    }

    node.items = items
    return consistencyCheck(node)
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
      const tmp = toCanonical(propValue, options)
      if (tmp.type === 'union' && options.hoistUnions !== false) {
        // 4.4.3. if the property `type` of `tmp` has the value `union` and union hoisting is not disabled
        // 4.4.3.1. we initialize the variable `new-accum` to the empty sequence
        const newAccum = []
        // 4.4.3.2. for each value `elem-of` in the property `of` of `tmp`
        tmp.anyOf.forEach((elemOf) => {
          // 4.4.3.2.1. for each value `elem` in `accum`
          if (typeof form.required === 'boolean') {
            elemOf.required = tmp.required
          }
          for (let elem of accum) {
            // 4.4.3.2.1.1. we clone `elem`
            elem = _.cloneDeep(elem)
            // 4.4.3.2.1.2. we clone `tmp` as `new-value`, except for `of`, and assign the properties of `elem-of` to it
            const newValue = Object.assign({}, tmp, elemOf)
            delete newValue.anyOf
            // 4.4.3.2.1.3. we add the pair `property-name` `new-value` to the key `properties` of the cloned `elem`
            elem.properties[propName] = newValue
            // 4.4.3.2.1.4. we add the cloned  `elem` to the sequence `new-accum`
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
      // 4.4.5.2. we remove the keys `properties` and `additionalProperties`
      delete form.properties
      delete form.additionalProperties
      // 4.4.5.3. we add the key `of` with the value of `accum`
      form.anyOf = accum
      // 4.4.5.4. we return  the output of applying the `consistency-check` algorithm to the modified value of `form`
      return consistencyCheck(form)
    }
  } else if (typeof type === 'object') {
    // 5. & 6.
    // 1. we initialize the variable `super-type-name` to the first value of type string in the chain of nested records for the value `type` starting with the one assigned to `type` in `form`
    const superTypeName = findClass(form)
    let subType = _.cloneDeep(form)
    subType.type = superTypeName

    switch (superTypeName) {
      case 'object':
        // 1.2. if `super-type-name` has a value `object` we transform `form` adding the property `properties` with the empty record `(Record)`
        subType.properties = subType.properties || {}
        break
      case 'array':
        // 1.1. if `super-type-name` has a value `array` we transform `form` adding the property `items` pointing a record `(Record "type" "any")`
        subType.items = subType.items || {type: 'any'}
        break
      case 'union':
        // 1.3. if `super-type-name` has a value `union` we transform `form` adding the property `of` with the empty sequence `(Seq)`
        subType.anyOf = subType.anyOf || []
        break
    }

    if (Array.isArray(type)) {
      const superTypes = _.cloneDeep(type).map(t => toCanonical(t, options))
      subType = superTypes.reduce((acc, val) => minType(val, acc), toCanonical(subType, options))
      return subType
    } else {
      const superType = toCanonical(type, options)
      const res = minType(superType, toCanonical(subType, options))
      return res
    }
  }

  return form
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
