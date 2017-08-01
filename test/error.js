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

  it('null should throw', function () {
    expandedForm(null, {}, function (err) {
      expect(err).to.not.equal(null)
    })
  })
})
