/*
  Accepts a JSON in-memory representation of an expanded RAML type and a
  callback function. Callback function should accept two arguments: error
  and canonical form object.
*/
function canonicalForm (expType, cb) {
  var canForm = 'asd'
  cb(null, canForm)
}

module.exports.canonicalForm = canonicalForm
