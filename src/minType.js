'use strict'

const isOpaqueType = require('./util').isOpaqueType
const consistencyCheck = require('./util').consistencyCheck

/**
 * `min-type` computes a canonical RAML type that will compute the biggest intersection
 * between the sets defined `super` and `sub`. If such an RAML type is empty, an error
 * will be thrown.
 */

/**
 * See `algorithms.md`
 *
 * Compute the narrower version of a constraint.
 * Throw an error if invalid
 */
const restrictions = {
  'minProperties': (sup, sub) => {
    if (sup <= sub) {
      return Math.max(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for min-properties than base type')
  },
  'maxProperties': (sup, sub) => {
    if (sup >= sub) {
      return Math.min(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for max-properties than base type')
  },
  'minLength': (sup, sub) => {
    if (sup <= sub) {
      return Math.max(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for min-length than base type')
  },
  'maxLength': (sup, sub) => {
    if (sup >= sub) {
      return Math.min(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for max-length than base type')
  },
  'minimum': (sup, sub) => {
    if (sup <= sub) {
      return Math.max(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for minimum than base type')
  },
  'maximum': (sup, sub) => {
    if (sup >= sub) {
      return Math.min(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for maximum than base type')
  },
  'minItems': (sup, sub) => {
    if (sup <= sub) {
      return Math.max(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for min-items than base type')
  },
  'maxItems': (sup, sub) => {
    if (sup >= sub) {
      return Math.min(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for max-items than base type')
  },
  'format': (sup, sub) => {
    if (sup === null || sup === sub) {
      return sup || sub
    }
    throw new Error(`Different values for format constraint [${sup} ${sub}]`)
  },
  'pattern': (sup, sub) => {
    if (sup === null || sup === sub) {
      return sup || sub
    }
    throw new Error(`Different values for pattern constraint [${sup} ${sub}]`)
  },
  'discriminator': (sup, sub) => {
    if (sup === null || sup === sub) {
      return sup || sub
    }
    throw new Error(`Different values for discriminator constraint [${sup} ${sub}]`)
  },
  'discriminatorValue': (sup, sub) => {
    if (sup === null || sup === sub) {
      return sup || sub
    }
    throw new Error(`Different values for discriminator-value constraint [${sup} ${sub}]`)
  },
  'enumValues': (sup, sub) => {
    // if sub is a subset of super
    if (sub.filter(e => sup.indexOf(e) === -1).length === 0) {
      return sub
    }
    throw new Error('sub type has a weaker constraint for enum-values than base type')
  },
  'uniqueItems': (sup, sub) => {
    if (!sup || sup === sub) {
      return sup && sub
    }
    throw new Error('sub type has a weaker constraint for unique-items than base type')
  },
  'required': (sup, sub) => {
    if (!sup || sup === sub) {
      return sup || sub
    }
    throw new Error('Error in required property, making optional base class required property')
  },
  'additionalProperties': (sup, sub) => {
    if (!sup || sup === sub) {
      return sup && sub
    }
    throw new Error('sub type has a weaker constraint for additional-properties than base type')
  }
}

/**
 * `min-type` computes a canonical RAML type that will compute the biggest intersection
 * between the sets defined `super` and `sub`. If such an RAML type is empty, an error
 * will be thrown.
 *
 * @param sup - the RAML canonical super-type
 * @param sub - the RAML canonical sub-type
 * @returns {Object}
 */
function minType (sup, sub) {
  // 1. we initialize the variables `super-type` and `sub-type` with the values of the properties `type` of `super` and `sub` respectively.
  const superType = sup.type
  const subType = sub.type
  // 2. if `super-type` and `sub-type` have the same value and the value is in the set `any boolean datetime datetime-only number integer string null file xml json"`
  if (superType === subType && isOpaqueType(superType)) {
    // 2.1. we initialize the variable `computed` to the record with property `type` having the common `super-type` and `sub-type` value
    const computed = Object.assign({}, sup, sub)
    for (let restriction in restrictions) {
      if (sup[restriction] !== undefined && sub[restriction] !== undefined) {
        // 2.2. for each restriction in `super` and `sub` we compute the narrower restriction and we assign it in `computed`
        computed[restriction] = restrictions[restriction](sup[restriction], sub[restriction])
      } else if (sup[restriction] !== undefined || sub[restriction] !== undefined) {
        // 2.3. for each restriction only in `super` or `sub` we assign it directly to `computed`
        computed[restriction] = sup[restriction] || sub[restriction]
      }
    }
    // 2.4. we return the output of computing the algorithm `consistency-check` on `computed`
    return consistencyCheck(computed)
  }

  // 3. if only one of `super-type` or `sub-type` has a value of `any`
  if (superType === 'any' ? subType !== 'any' : subType === 'any') { // XOR
    const anytype = superType === 'any' ? sup : sub
    const other = superType === 'any' ? sub : sup
    const computed = Object.assign({}, sup, sub)
    computed.type = other.type
    for (let restriction in restrictions) {
      if (anytype[restriction] !== undefined && other[restriction] !== undefined) {
        // 3.1. for each restriction in the `any` type and in the other type, we compute the narrower restriction and we re-assign it to the other type
        computed[restriction] = restrictions[restriction](anytype[restriction], other[restriction])
      } else if (anytype[restriction] !== undefined) {
        // 3.2. for each restriction only in `any` we assign it directly to the other type
        computed[restriction] = anytype[restriction]
      }
    }

    // 3.3. we return the output of computing the algorithm `consistency-check` on the other type
    return consistencyCheck(computed)
  }

  // 4. if `super-type` is `number` and the `sub-type` is `integer`
  if (superType === 'number' && subType === 'integer') {
    const computed = Object.assign({}, sup, sub)
    for (let restriction in restrictions) {
      if (sup[restriction] !== undefined && sub[restriction] !== undefined) {
        // 4.1. for each restriction in the `number` type and in the `integer` type, we compute the narrower restriction and we re-assign it to the `integer` type
        computed[restriction] = restrictions[restriction](sup[restriction], sub[restriction])
      } else if (sup[restriction] !== undefined) {
        // 4.2. for each restriction only in `number` we assign it directly to the `integer` type
        computed[restriction] = sup[restriction]
      }
    }
    // 4.3. we return the output of computing the algorithm `consistency-check` on the `integer` type
    return consistencyCheck(computed)
  }

  // 5. if `super-type` is `array` and `sub-type` is `array`
  if (superType === 'array' && subType === 'array') {
    const computed = Object.assign({}, sup, sub)
    // 5.1. we initialize the variable `min-items` with the output of applying this algorithm to the values for the key `items` in `super` and `sub`
    // 5.2. we re-assign the value of the property `items` in `sub` with the value of `min-items`
    computed.items = minType(sup.items, sub.items)

    for (let restriction in restrictions) {
      if (sup[restriction] !== undefined && sub[restriction] !== undefined) {
        // 4.3. for each restriction in `super` and `sub` we compute the narrower restriction and we assign it in `sub`
        computed[restriction] = restrictions[restriction](sup[restriction], sub[restriction])
      } else if (sup[restriction] !== undefined) {
        // 4.4. for each restriction only in `super` we assign it directly to `sub`
        computed[restriction] = sup[restriction]
      }
    }
    // 4.5. we return the output of computing the algorithm `consistency-check` on `sub`
    return consistencyCheck(computed)
  }

  // 6. if `super-type` is `object` and `sub-type` is `object`
  if (superType === 'object' && subType === 'object') {
    const computed = Object.assign({}, sup, sub)
    // 6.1. for initialize the variable `common-props` to the empty record
    const commonProps = {}
    const superProps = sup.properties || {}
    const subProps = sub.properties || {}
    const superPropKeys = Object.keys(superProps)
    const subPropKeys = Object.keys(subProps)
    // 6.2. for each key in the `properties` value `sub` that is also present in the `properties` value of `super`
    superPropKeys.filter(p => p in subProps).forEach((p) => {
      // 6.2.1. we initialize the variable `tmp` with the output of applying the algorithm to the value for the common property in `super` and in `sub`
      // 6.2.2. we assign the computed value using the name of the common property as the key in the `common-props` record
      commonProps[p] = minType(sup.properties[p], sub.properties[p])
    })

    // 6.3. for each pair `property-name` `property-value` only in either `super` or `sub` we add it to the record `common-props`
    superPropKeys.filter(p => !(p in subProps)).forEach((p) => {
      commonProps[p] = sup.properties[p]
    })
    subPropKeys.filter(p => !(p in superProps)).forEach((p) => {
      commonProps[p] = sub.properties[p]
    })

    for (let restriction in restrictions) {
      if (sup[restriction] !== undefined && sub[restriction] !== undefined) {
        // 6.4. for each restriction in `super` and `sub` we compute the narrower restriction and we assign it in `sub`
        computed[restriction] = restrictions[restriction](sup[restriction], sub[restriction])
      } else if (sup[restriction] !== undefined) {
        // 6.5. for each restriction only in `super` we assign it directly to `sub`
        computed[restriction] = sup[restriction]
      }
    }

    // 6.6. we assign the value of the key `properties` in `sub` to be `common-props`
    computed.properties = commonProps
    // 6.7. we return the output of computing the algorithm `consistency-check` on `sub`
    return consistencyCheck(computed)
  }

  // 7. if `super-type` is `union` and `sub-type` is `union`
  if (superType === 'union' && subType === 'union') {
    const computed = Object.assign({}, sup, sub)
    // 7.1. we initialize the variable `accum` to the empty sequence
    const accum = []
    // 7.2. for each value `elem-super` in the property `of` of `super`
    for (let elemSuper of sup.anyOf) {
      // 7.2.1. if `sub.of` is non-empty
      if (sub.anyOf.length > 0) {
        // 7.2.1.1. for each value `elem-sub` in the property `of` of `sub`
        for (let elemSub of sub.anyOf) {
          // 7.2.1.1.1. we add to `accum` the output of applying this algorithm to `elem-super` and `elem-sub`
          accum.push(minType(elemSuper, elemSub))
        }
      } else {
        // 7.2.2. else if `sub.of` is empty, add `elem-super` to `accum`
        accum.push(elemSuper)
      }
    }

    for (let restriction in restrictions) {
      if (sup[restriction] !== undefined && sub[restriction] !== undefined) {
        // 7.3. for each restriction in `super` and `sub` we compute the narrower restriction and we assign it in `sub`
        computed[restriction] = restrictions[restriction](sup[restriction], sub[restriction])
      } else if (sup[restriction] !== undefined) {
        // 7.4. for each restriction only in `super` we assign it directly to `sub`
        computed[restriction] = sup[restriction]
      }
    }

    // 7.5. we assign the value of the key `of` in `sub` to be `accum`
    computed.anyOf = accum
    // 7.6. we return the output of computing the algorithm `consistency-check` on `sub`
    return consistencyCheck(computed)
  }

  // 8. if `super-type` is `union` and `sub-type` is any other type
  if (superType === 'union' && subType !== 'union') {
    const computed = Object.assign({}, sup, sub)
    computed.type = superType
    // 8.1. for each value `i` `elem-super` in the property `of` of `super`
    // 8.1.1. we replace `i` in `of` with the output of applying this algorithm to `elem-super` and `sub`
    computed.anyOf = sup.anyOf.map(elem => minType(elem, sub))

    for (let restriction in restrictions) {
      if (sup[restriction] !== undefined && sub[restriction] !== undefined) {
        // 8.2. for each restriction in `super` and `sub` we compute the narrower restriction and we assign it in `sub`
        computed[restriction] = restrictions[restriction](sup[restriction], sub[restriction])
      } else if (sub[restriction] !== undefined) {
        // 8.3. for each restriction only in `super` we assign it directly to `sub`
        computed[restriction] = sub[restriction]
      }
    }

    // 8.4. we return the output of computing the algorithm `consistency-check` on `super`
    return consistencyCheck(computed)
  }

  throw new Error(`incompatible types: [${subType}, ${superType}]`)
}

module.exports = minType
