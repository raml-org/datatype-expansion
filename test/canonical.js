'use strict'

const describe = require('mocha/lib/mocha.js').describe
const it = require('mocha/lib/mocha.js').it

const _ = require('lodash')
const expect = require('chai').expect
const types = require('./fixtures/types')
const forms = require('./fixtures/canonical_forms')
const expandedForm = require('..').expandedForm
const canonicalForm = require('..').canonicalForm

describe('canonicalForm()', function () {
  _.each(types, function (type, name) {
    it('should generate canonical form of type ' + name, function () {
      // don't run tests for forms that don't exist
      if (forms[name] == null) return

      const expForm = expandedForm(types[name], types)
      const canForm = canonicalForm(expForm)
      expect(canForm).to.deep.equal(forms[name])
    })
  })
})
