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
    expandedForm(types['error'], types, function (err, expForm) {
      err = null
      canonicalForm(expForm, function (err) {
        expect(err).to.not.equal(null)
      })
    })
  })

  it('invalid types should throw', function () {
    expandedForm('nothing', {}, function (err) {
      expect(err).to.not.equal(null)
    })
  })

  it('invalid consistency check should throw', function () {
    expandedForm({
      type: 'object',
      minProperties: 5,
      maxProperties: 1
    }, {}, function (err, expForm) {
      err = null
      canonicalForm(expForm, function (err) {
        expect(err).to.not.equal(null)
      })
    })

    expandedForm({
      type: 'string',
      minLength: 5,
      maxLength: 1
    }, {}, function (err, expForm) {
      err = null
      canonicalForm(expForm, function (err) {
        expect(err).to.not.equal(null)
      })
    })

    expandedForm({
      type: 'number',
      minimum: 5,
      maximum: 1
    }, {}, function (err, expForm) {
      err = null
      canonicalForm(expForm, function (err) {
        expect(err).to.not.equal(null)
      })
    })

    expandedForm({
      type: 'array',
      items: 'number',
      minItems: 5,
      maxItems: 1
    }, {}, function (err, expForm) {
      err = null
      canonicalForm(expForm, function (err) {
        expect(err).to.not.equal(null)
      })
    })
  })

  it('null should throw', function () {
    expandedForm(null, {}, function (err) {
      expect(err).to.not.equal(null)
    })
  })

  it('only string or object', function () {
    expandedForm(32, {}, function (err) {
      expect(err).to.not.equal(null)
    })
  })
})
