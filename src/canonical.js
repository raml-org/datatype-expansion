'use strict'

/*
  Accepts a JSON in-memory representation of an expanded RAML type and a
  callback function. Callback function should accept two arguments: error
  and canonical form object.
*/
function canonicalForm (expForm, cb) {
  // var canForm = getCanonicalForm(expForm)
  cb(null, expForm)
}

module.exports.canonicalForm = canonicalForm

// broke the maps anyways
// TODO
