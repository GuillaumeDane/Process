// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== music ==== //

var musicSchema = new Schema({

  name:{
    type: String,
    require: true
  },

  producer:{
    type: String,
    require: true
  },

  description:{
    type: String,
    require: true
  },

  date:{
    type: Date,
    require: true
  },

  bpm:{
    type: Number,
    require: true
  },

  tonality:{
    type: String,
    require: true
  },

  software:{
    type: String,
    require: true
  },

  vst:{
    type: String,
    require: true
  },

  hardware:{
    type: String,
    require: true
  },

  youtube:{
    type: String,
    require: true
  }
});

var music = mongoose.model('music', musicSchema);

// ==== Export ==== //

module.export = music;
