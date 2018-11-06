// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== producer ==== //

var producerSchema = new Schema({
  name: String,
  email: String,
  music: String
})

var producer = mongoose.model('producer', producerSchema);

// ==== Export ==== //

module.export = artist;
