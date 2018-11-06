// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== software ==== //

var softwareSchema = new Schema({
  name: String,
  description: String
})

var software = mongoose.model('mongoBase', softwareSchema);

// ==== Export ==== //

module.export = software;
