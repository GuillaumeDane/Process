// ==== modules ==== //

var mongoose = require('mongoose');

// ==== music ==== //

var musicSchema = mongoose.Schema({

  name:{
    type: String
  },

  producer:{
    type: String
  },

  description:{
    type: String
  },

  date:{
    type: Date
  },

  bpm:{
    type: Number
  },

  tonality:{
    type: String
  },

  software:{
    type: String
  },

  vst:{
    type: String

  },
  hardware:{
    type: String
  }
});

var music = mongoose.model('music', musicSchema);

// ==== Export ==== //

module.exports = music;
