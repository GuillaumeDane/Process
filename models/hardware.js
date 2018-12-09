// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== hardware ==== //

var hardwareSchema = Schema({

  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },

  name: {
    type: String,
  },

  img: {
    type: String,
  }

})

var hardware = mongoose.model('hardwares', hardwareSchema);

// ==== Export ==== //

module.exports = hardware;
