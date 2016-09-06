var yaml = require('yaml-js');
var fs = require('fs');
var type_expander = require('datatype-expansion');

var content = fs.readFileSync("ramls/type_collections.raml", "utf8").toString();

var yaml_content = yaml.load(content);
var typesContext = yaml_content.types;

// you can change type name in first parameter to expand another type
type_expander.expandedForm(typesContext["Device"], typesContext, function(err, expanded) {
  if(err) {
    console.log(err);
    return;
  }

  type_expander.canonicalForm(expanded, function(err, canonical) {
    // canonical contains the computed canonical form
    if(err) {
      console.log(err);
      return;
    }
    console.log(JSON.stringify(canonical, null, 2));
  });
});
