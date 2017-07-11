'use strict'

/* global describe, it */

const _ = require('lodash')
const expect = require('chai').expect
const types = require('./fixtures/types').types
const forms = require('./fixtures/canonical_forms')
const expandedForm = require('..').expandedForm
const canonicalForm = require('..').canonicalForm

describe('canonicalForm()', function () {
  _.each(types, function (type, name) {
    // These two types give error in cljs library
    if (name === 'WithInheritance' || name === 'ValidConstraintsInheritance') {
      return
    }
    it('should generate canonical form of type ' + name, function () {
      expandedForm(types[name], types, function (err, expForm) {
        err = null
        canonicalForm(expForm, function (err, canForm) {
          expect(err).to.equal(null)
          expect(canForm).to.deep.equal(forms[name])
        })
      })
    })
  })
})
