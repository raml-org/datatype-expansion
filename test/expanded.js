'use strict'

const describe = require('mocha/lib/mocha.js').describe
const it = require('mocha/lib/mocha.js').it

const _ = require('lodash')
const expect = require('chai').expect
const types = require('./fixtures/types')
const forms = require('./fixtures/expanded_forms')
const expandedForm = require('..').expandedForm

describe('expandedForm()', function () {
  _.each(types, function (type, name) {
    it('should generate expanded form of type ' + name, function () {
      const expForm = expandedForm(types[name], types)
      expect(expForm).to.deep.equal(forms[name])
    })
  })
})
