var mock = require('./mock')

/*
  Accepts an in-memory JSON representation of the type, the types mapping
  and a callback function. If the invocation succeeds, it will return the
  expanded form as an argument to the provided callback function.
*/
function expandedForm (type, types, cb) {
  var expForm = mock.getExpandedForm(type)
  cb(null, expForm)
}

module.exports.expandedForm = expandedForm
