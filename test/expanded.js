'use strict'

/* global describe, it */

const _ = require('lodash')
const expect = require('chai').expect
const types = require('./fixtures/types')
const forms = require('./fixtures/expanded_forms')
const expandedForm = require('..').expandedForm

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
