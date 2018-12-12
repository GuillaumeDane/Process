// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== music ==== //


var musicSchema = mongoose.Schema({

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

  cover: {
    type: String,
  },

  // ==== software ==== //

  software:{
    name:{
      type: String
    },
    description:{
      type: String
    },
    img:{
      type: String
    }
  },

  // ==== vst ==== //

  vst_1: {
    name: {
      type: String
    },
    img: {
      type: String
    }
  },

  vst_2: {
    name: {
      type: String
    },
    img: {
      type: String
    }
  },

  vst_3: {
    name: {
      type: String
    },
    img: {
      type: String
    }
  },

  vst_4: {
    name: {
      type: String
    },
    img: {
      type: String
    }
  },

  // ==== hardware ==== //

  hardware_1: {
    name: {
      type: String
    },
    img: {
      type: String
    }
  },

  hardware_2: {
    name: {
      type: String
    },
    img: {
      type: String
    }
  },

  hardware_3: {
    name: {
      type: String
    },
    img: {
      type: String
    }
  },

  hardware_4: {
    name: {
      type: String
    },
    img: {
      type: String
    }
  },

});

var music = mongoose.model('music', musicSchema);

// ==== Export ==== //

module.exports = music;
