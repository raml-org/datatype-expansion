/* global describe, it */

var _ = require('lodash')
var expect = require('chai').expect
var types = require('./fixtures/types')
var forms = require('./fixtures/canonical_forms')
var expandedForm = require('../src/expanded').expandedForm
var canonicalForm = require('../src/canonical').canonicalForm

describe('canonicalForm()', function () {
  _.each(types, function (type, name) {
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
