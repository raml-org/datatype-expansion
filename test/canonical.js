'use strict'

const describe = require('mocha/lib/mocha.js').describe
const it = require('mocha/lib/mocha.js').it

const expect = require('chai').expect
const types = require('./fixtures/types')
const forms = require('./fixtures/canonical_forms')
const expandedForm = require('..').expandedForm
const canonicalForm = require('..').canonicalForm

describe('canonicalForm()', function () {
  for (const name in types) {
    // don't run tests for forms that don't exist
    if (forms[name] != null) {
      it('should generate canonical form of type ' + name, function () {
        const expForm = expandedForm(types[name], types)
        const canForm = canonicalForm(expForm)
        expect(canForm).to.deep.equal(forms[name])
      })

      it('should asynchronously generate canonical form of type ' + name, function (done) {
        const expForm = expandedForm(types[name], types)
        canonicalForm(expForm, function (e, result) {
          expect(result).to.deep.equal(forms[name])
          done()
        })
      })
    }

    const unhoistedName = name + '_unhoisted'
    if (unhoistedName in forms) {
      it('should generate canonical form of type ' + name + ' with union hoisting disabled', function () {
        const expForm = expandedForm(types[name], types)
        const canForm = canonicalForm(expForm, { hoistUnions: false })
        expect(canForm).to.deep.equal(forms[unhoistedName])
      })

      it('should asynchronously generate canonical form of type ' + name + ' with union hoisting disabled', function (done) {
        const expForm = expandedForm(types[name], types)
        canonicalForm(expForm, {
          hoistUnions: false,
          callback: function (e, result) {
            expect(result).to.deep.equal(forms[unhoistedName])
            done()
          }
        })
      })
    }
  }
})
