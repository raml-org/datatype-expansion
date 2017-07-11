'use strict'

/* global describe, it */

const _ = require('lodash')
const expect = require('chai').expect
const types = require('./fixtures/types').types
const forms = require('./fixtures/expanded_forms')
const expandedForm = require('..').expandedForm

describe('expandedForm()', function () {
  _.each(types, function (type, name) {
    // These two types give error in cljs library
    if (name === 'WithInheritance' || name === 'ValidConstraintsInheritance') {
        return
    }
    it('should generate expanded form of type ' + name, function () {
      expandedForm(types[name], types, function (err, expForm) {
        expect(err).to.equal(null)
        expect(expForm).to.deep.equal(forms[name])
      })
    })
  })
})
