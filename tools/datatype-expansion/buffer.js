var tools = require("./index")

var typesContext = {"Songs.Song": {"properties": {"title": "string",
                                                 "length": "number"}},
                    "Songs.Album": {"properties": {"title": "string",
                                                   "songs": "Songs.Song[]"}}};
console.log("EXPANDING:");
console.log(typesContext["Songs.Album"]);
tools.expandedForm(typesContext["Songs.Album"], typesContext, function(err, expanded) {
  // expanded contains the computed expanded form
  //{
  //  "properties": {
  //    "title": {
  //      "type": "string",
  //      "required": true
  //    },
  //    "songs": {
  //      "type": "array",
  //      "items": {
  //        "properties": {
  //          "title": {
  //            "type": "string",
  //            "required": true
  //          },
  //          "length": {
  //            "type": "number",
  //            "required": true
  //          }
  //        },
  //        "additionalProperties": true,
  //        "type": "object",
  //        "required": true
  //      },
  //      "required": true
  //    }
  //  },
  //  "additionalProperties": true,
  //  "type": "object",
  //  "required": true
  //}
  console.log(err);
  console.log(JSON.stringify(expanded,null,2));
});
