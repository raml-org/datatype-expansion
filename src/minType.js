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
  minProperties: (sup, sub) => {
    if (sup <= sub) {
      return Math.max(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for min-properties than base type')
  },
  maxProperties: (sup, sub) => {
    if (sup >= sub) {
      return Math.min(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for max-properties than base type')
  },
  minLength: (sup, sub) => {
    if (sup <= sub) {
      return Math.max(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for min-length than base type')
  },
  maxLength: (sup, sub) => {
    if (sup >= sub) {
      return Math.min(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for max-length than base type')
  },
  minimum: (sup, sub) => {
    if (sup <= sub) {
      return Math.max(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for minimum than base type')
  },
  maximum: (sup, sub) => {
    if (sup >= sub) {
      return Math.min(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for maximum than base type')
  },
  minItems: (sup, sub) => {
    if (sup <= sub) {
      return Math.max(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for min-items than base type')
  },
  maxItems: (sup, sub) => {
    if (sup >= sub) {
      return Math.min(sup, sub)
    }
    throw new Error('sub type has a weaker constraint for max-items than base type')
  },
  format: (sup, sub) => {
    if (sup === null || sup === sub) {
      return sup || sub
    }
    throw new Error(`Different values for format constraint [${sup} ${sub}]`)
  },
  pattern: (sup, sub) => {
    if (sup === null || sup === sub) {
      return sup || sub
    }
    throw new Error(`Different values for pattern constraint [${sup} ${sub}]`)
  },
  discriminator: (sup, sub) => {
    if (sup === null || sup === sub) {
      return sup || sub
    }
    throw new Error(`Different values for discriminator constraint [${sup} ${sub}]`)
  },
  discriminatorValue: (sup, sub) => {
    if (sup === null || sup === sub) {
      return sup || sub
    }
    throw new Error(`Different values for discriminator-value constraint [${sup} ${sub}]`)
  },
  enumValues: (sup, sub) => {
    // if sub is a subset of super
    if (sub.filter(e => sup.indexOf(e) === -1).length === 0) {
      return sub
    }
    throw new Error('sub type has a weaker constraint for enum-values than base type')
  },
  uniqueItems: (sup, sub) => {
    if (!sup || sup === sub) {
      return sup && sub
    }
    throw new Error('sub type has a weaker constraint for unique-items than base type')
  },
  required: (sup, sub) => {
    if (!sup || sup === sub) {
      return sup || sub
    }
    throw new Error('Error in required property, making optional base class required property')
  },
  additionalProperties: (sup, sub) => {
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
    for (const restriction in restrictions) {
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
    for (const restriction in restrictions) {
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
    for (const restriction in restrictions) {
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

    for (const restriction in restrictions) {
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

    for (const restriction in restrictions) {
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

  // 7. if `super-type` is `union` or `sub-type` is `union`
  if (superType === 'union' || subType === 'union') {
    // 7.1. initialize `computed` to the empty record
    const computed = {}
    let supAnyOf, subAnyOf
    // 7.2. if `super-type` is `union`
    if (superType === 'union') {
      // 7.2.1. assign its facets to `computed`
      Object.assign(computed, sup)
      // 7.2.2. set `sup-of` to `of` of `sup`
      supAnyOf = sup.anyOf
    } else {
      // 7.3.1. assign the non-functional facets of `sup` to `computed` and retain only the functional facets in `sup`
      sup = splitFacets(computed, sup)
      // 7.3.2 set `sup-of` to a single element array of `sup`
      supAnyOf = [sup]
    }
    // 7.4. if `sub-type` is `union`
    if (subType === 'union') {
      // 7.4.1. assign its facets to `computed`
      Object.assign(computed, sub)
      // 7.4.2. set `sub-of` to `of` of `sub`
      subAnyOf = sub.anyOf
    } else {
      // 7.5.1. assign the non-functional facets of `sub` to `computed` and retain only the functional facets in `sub`
      sub = splitFacets(computed, sub)
      // 7.5.2. else set `sub-of` to a single element array of `sub`
      subAnyOf = [sub]
    }
    // 7.6. initialize `of` of `computed` to the empty array
    computed.anyOf = []
    // 7.7. if `sup-of` is non-empty
    if (supAnyOf.length > 0) {
      // 7.7.1. if `sub-of` is non-empty
      if (subAnyOf.length > 0) {
        // 7.7.1.1. for each value `elem-super` in `sup-of`
        for (const elemSuper of supAnyOf) {
          // 7.7.1.1.1. for each value `elem-sub` in `sub-of`
          for (const elemSub of subAnyOf) {
            // 7.7.1.1.1.1. set `result` to the output of applying this algorithm to `elem-super` and `elem-sub`
            const result = minType(elemSuper, elemSub)
            // 7.7.1.1.1.2. if `result` is a `union`, concatenate its `of` to `of` of `computed`
            if (result.type === 'union') {
              computed.anyOf.concat(result.anyOf)
            } else {
              // 7.7.1.1.1.3. else append `result` to `of` of `computed`
              computed.anyOf.push(result)
            }
          }
        }
      } else {
        // 7.7.2. else if `sub-of` is empty, assign `of` of `computed` to `sup-of`
        computed.anyOf = supAnyOf
      }
    } else {
      // 7.8. else if `sup-of` is empty, assign `of` of `computed` to `sup-of`
      computed.anyOf = subAnyOf
    }

    for (const restriction in restrictions) {
      if (sup[restriction] !== undefined && superType === 'union') {
        if (sub[restriction] !== undefined && subType === 'union') {
          // 7.9. for each restriction in unions `super` and `sub` we compute the narrower restriction and we assign it in `computed`
          computed[restriction] = restrictions[restriction](sup[restriction], sub[restriction])
        } else {
          // 7.10. for each restriction only in union `super` we assign it directly to `computed`
          computed[restriction] = sup[restriction]
        }
      } else if (sub[restriction] !== undefined && subType === 'union') {
        // 7.11. for each restriction only in union `sub` we assign it directly to `computed`
        computed[restriction] = sub[restriction]
      }
    }

    // 7.12. we return the output of computing the algorithm `consistency-check` on `computed`
    return consistencyCheck(computed)
  }

  // 8. else fail the algorithm due to incompatible types
  throw new Error(`incompatible types: [${subType}, ${superType}]`)
}

// functional type facets not included in "restrictions"
const functionalFacets = {
  type: true,
  properties: true,
  items: true,
  anyOf: true
}

function splitFacets (nonfunctional, source) {
  const functional = {}
  for (const key of Object.keys(source)) {
    if (key in functionalFacets || key in restrictions) {
      functional[key] = source[key]
    } else {
      nonfunctional[key] = source[key]
    }
  }
  return functional
}

module.exports = minType
