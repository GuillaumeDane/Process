// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== hardware ==== //

var hardwareSchema = new Schema({
  name: String,
  description: String
})

var hardware = mongoose.model('hardware', hardwareSchema);

// ==== Export ==== //

module.export = hardware;
