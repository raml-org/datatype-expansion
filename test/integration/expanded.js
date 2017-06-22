/* global describe, it */

var _ = require('lodash')
var expect = require('chai').expect
var types = require('../fixtures/types')
var forms = require('../fixtures/expanded_forms')
var expandedForm = require('../../src/expanded').expandedForm

describe('expandedForm()', function () {
  _.each(types, function (type, name) {
    it('should generate expanded form of type ' + name, function () {
      expandedForm(types[name], types, function (err, expForm) {
        expect(err).to.equal(null)
        expect(expForm).to.deep.equal(forms[name])
      })
    })
  })
})
