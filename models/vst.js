// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== vst ==== //

var vstSchema = new Schema({
  name: String,
})

var vst = mongoose.model('mongoBase', vstSchema);

// ==== Export ==== //

module.export = software;
