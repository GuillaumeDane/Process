// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== music ==== //


var musicSchema = mongoose.Schema({

  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },

  name: {
    type: String,
  },

  cover: {
    type: String,
  },

  producer: {
    type: String,
  },

  description: {
    type: String,
  },

  bpm: {
    type: Number,
  },

  tonality: {
    type: String,
  },

  software: {
//  type: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'softwares'
  },

  vst: {
//  type: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'vsts'

  },

  hardware: {
//  type: String,    
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hardwares'
  },

  cover: {
    type: String,
  }
});

var music = mongoose.model('music', musicSchema);

// ==== Export ==== //

module.exports = music;
