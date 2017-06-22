var expanded = require('./expanded')
var canonical = require('./canonical')

module.exports = {
  expandedForm: expanded.expandedForm,
  canonicalForm: canonical.canonicalForm
}

// TEST:
//
// var types = require('../test/fixtures/types')
// var type = types['Song']
// expanded.expandedForm(type, null, function(err, expForm) {
//   console.log('Expanded >>', expForm)
//   canonical.canonicalForm(expForm, function(err, canForm) {
//     console.log('Canonical >>', canForm)
//   })
// })
