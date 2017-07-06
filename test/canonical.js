'use strict'

/* global describe, it */

const _ = require('lodash')
const expect = require('chai').expect
const types = require('./fixtures/types')
const forms = require('./fixtures/canonical_forms')
const expandedForm = require('../src/expanded').expandedForm
const canonicalForm = require('../src/canonical').canonicalForm

describe('canonicalForm()', function () {
  _.each(types, function (type, name) {
    if (name === 'canonical' || name === 'expanded' ||
        // TODO: fix tests
        name === 'WithInheritance' || name === 'ValidConstraintsInheritance') {
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
