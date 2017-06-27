/*
  Accepts an in-memory JSON representation of the type, the types mapping
  and a callback function. If the invocation succeeds, it will return the
  expanded form as an argument to the provided callback function.
*/
function expandedForm (type, types, cb) {
  var expForm = getExpandedForm(type)
  cb(null, expForm)
}

module.exports.expandedForm = expandedForm

// Mock
// NOTE: These mappings will return invalid values and tests will fail if
// types at ../test/fixtures/types.js will change.
var expanded = require('../test/fixtures/expanded_forms')

// Map of types JSON to their name
var typesToNames = {
  '{"properties":{"title":{"type":"string","example":"Great"},"length":"string"}}': 'Song',
  '{"properties":{"title":"string","songs":{"description":"A list of songs inside an album.","type":"Song[]"}},"examples":{"Album1":{"title":"Test 1","songs":[{"title":"Great","length":"2"},{"title":"Awesome","length":"3"}]},"Album2":{"title":"Test 2","songs":[{"title":"Great","length":"2"},{"title":"Awesome","length":"3"}]}}}': 'Album',
  '{"type":"object","properties":{"manufacturer":{"type":"string"},"numberOfSIMCards":{"type":"number"},"kind":"string"}}': 'Phone',
  '{"type":"object","properties":{"manufacturer":{"type":"string"},"numberOfUSBPorts":{"type":"number"},"kind":"string"}}': 'Notebook',
  '{"type":"Phone | Notebook"}': 'Device',
  '{"type":"nil | string"}': 'Deprecation',
  '{"properties":{"a":"string","b":"number | string"}}': 'SimpleUnion',
  '{"type":"Device","properties":{"phone":"Phone","device":"Device"},"example":"{\\n  \\"manufacturer\\": \\"John\\",\\n  \\"numberOfSIMCards\\": 1234,\\n  \\"kind\\": \\"Stamp Collecting\\",\\n  \\"phone\\": {\\n    \\"manufacturer\\": \\"John\\",\\n    \\"numberOfSIMCards\\": 1234,\\n    \\"kind\\": \\"Stamp Collecting\\"\\n  },\\n  \\"device\\": {\\n    \\"manufacturer\\": \\"John\\",\\n    \\"numberOfSIMCards\\": 1234,\\n    \\"kind\\": \\"Stamp Collecting\\"\\n  }\\n}\\n"}': 'WithInheritance',
  '{"type":{"type":"object","properties":{"stringProperty":{"type":"string"},"numberProperty":{"type":"number"}}}}': 'InlinedDeclaration',
  '{"minProperties":2,"maxProperties":9,"properties":{"name":{"type":"string","required":true,"minLength":4,"maxLength":9,"enum":["Jane","John"]},"age":{"type":"integer","minimum":19,"maximum":98},"cats":{"type":"array","items":"string","minItems":2,"maxItems":4},"bio":{"type":"object","minProperties":2,"maxProperties":9}},"type":{"type":"object","discriminator":"name","discriminatorValue":"John","additionalProperties":false,"minProperties":1,"maxProperties":10,"properties":{"name":{"type":"string","required":false,"minLength":3,"maxLength":10,"pattern":"foobar","enum":["Jane","John","Markus"]},"age":{"type":"integer","minimum":18,"maximum":99},"dob":{"type":"datetime","format":"rfc2616"},"cats":{"type":"array","items":"string","uniqueItems":true,"minItems":1,"maxItems":5},"bio":{"type":"object","minProperties":1,"maxProperties":10}}}}': 'ValidConstraintsInheritance'
}

function getExpandedForm (type) {
  var typeName = typesToNames[JSON.stringify(type)]
  return expanded[typeName]
}
