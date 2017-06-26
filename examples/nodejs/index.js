// var datexp = require('datatype-expansion')
var datexp = require('../..')

var types = {
  'SimpleUnion': {
    'properties': {
      'a': 'string',
      'b': 'number | string'
    }
  }
}
var name = 'SimpleUnion'
console.log('Type name:', name)

datexp.expandedForm(types[name], types, function (err, expForm) {
  if (err !== null) {
    console.log('Expanded form error:', err)
    return
  }
  console.log('Expanded form:', JSON.stringify(expForm, null, 2))

  datexp.canonicalForm(expForm, function (err, canForm) {
    if (err !== null) {
      console.log('Canonical form error:', err)
      return
    }
    console.log('Canonical form:', JSON.stringify(canForm, null, 2))
  })
})
