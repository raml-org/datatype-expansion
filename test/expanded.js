'use strict'

const describe = require('mocha/lib/mocha.js').describe
const it = require('mocha/lib/mocha.js').it

const expect = require('chai').expect
const types = require('./fixtures/types')
const forms = require('./fixtures/expanded_forms')
const expandedForm = require('..').expandedForm

describe('expandedForm()', function () {
  for (const name in types) {
    if (name in forms) {
      it('should generate expanded form of type ' + name, function () {
        const expForm = expandedForm(types[name], types)
        expect(expForm).to.deep.equal(forms[name])
      })

      it('should asynchronously generate expanded form of type ' + name, function (done) {
        expandedForm(types[name], types, function (e, result) {
          expect(result).to.deep.equal(forms[name])
          done()
        })
      })
    }

    const trackedName = name + '_tracked'
    if (trackedName in forms) {
      it('should generate expanded form of type ' + name + ' with original types tracked', function () {
        const expForm = expandedForm(types[name], types, { trackOriginalType: true })
        expect(expForm).to.deep.equal(forms[trackedName])
      })

      it('should asynchronously generate expanded form of type ' + name + ' with original types tracked', function (done) {
        expandedForm(types[name], types, {
          trackOriginalType: true,
          callback: function (e, result) {
            expect(result).to.deep.equal(forms[trackedName])
            done()
          }
        })
      })
    }
  }
})
