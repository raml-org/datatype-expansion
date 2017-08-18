'use strict'

const describe = require('mocha/lib/mocha.js').describe
const it = require('mocha/lib/mocha.js').it

const expect = require('chai').expect
const expandedForm = require('..').expandedForm
const canonicalForm = require('..').canonicalForm

const types = {
  a: {
    properties: {
      b: 'number'
    }
  },
  error: {
    type: 'a',
    properties: {
      b: 'string'
    }
  }
}

describe('errors', function () {
  it('incompatible types should throw', function () {
    try {
      const expForm = expandedForm(types['error'], types)
      canonicalForm(expForm)
      expect.fail()
    } catch (err) {}
  })

  it('callback errors should work', function () {
    expandedForm(types['error'], types, function (err, expForm) {
      err = null
      canonicalForm(expForm, function (err) {
        expect(err).to.not.equal(null)
      })
    })
  })

  it('invalid types should throw', function () {
    try {
      expandedForm('nothing', {})
      expect.fail()
    } catch (err) {}
  })

  it('invalid consistency check should throw', function () {
    try {
      const expForm = expandedForm({
        type: 'object',
        minProperties: 5,
        maxProperties: 1
      }, {})
      canonicalForm(expForm)
      expect.fail()
    } catch (err) {}

    try {
      const expForm = expandedForm({
        type: 'string',
        minLength: 5,
        maxLength: 1
      }, {})
      canonicalForm(expForm)
      expect.fail()
    } catch (err) {}

    try {
      const expForm = expandedForm({
        type: 'number',
        minimum: 5,
        maximum: 1
      }, {})
      canonicalForm(expForm)
      expect.fail()
    } catch (err) {}

    try {
      const expForm = expandedForm({
        type: 'array',
        items: 'number',
        minItems: 5,
        maxItems: 1
      }, {})
      canonicalForm(expForm)
      expect.fail()
    } catch (err) {}
  })

  it('null should throw', function () {
    try {
      expandedForm(null, {})
      expect.fail()
    } catch (err) {}
  })

  it('only string or object', function () {
    try {
      expandedForm(42, {})
      expect.fail()
    } catch (err) {}
  })
})
