// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== music ==== //

var musicSchema = new Schema({
  name: String,
  producer: String,
  description: String,
  date: Date,
  bpm: Number,
  tonality: String,
  software: String,
  vst: String,
  hardware: String,
  youtube: String
});

var music = mongoose.model('music', musicSchema);

// ==== Export ==== //

module.export = music;
