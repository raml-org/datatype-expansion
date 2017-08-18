'use strict'

const describe = require('mocha/lib/mocha.js').describe
const it = require('mocha/lib/mocha.js').it

const _ = require('lodash')
const expect = require('chai').expect
const types = require('./fixtures/types')
const forms = require('./fixtures/canonical_forms')
const expandedForm = require('..').expandedForm
const canonicalForm = require('..').canonicalForm

describe('callback api', function () {
  _.each(types, function (type, name) {
    it('should generate canonical form of type ' + name, function () {
      // don't run tests for forms that don't exist
      if (forms[name] == null) return
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
