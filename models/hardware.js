// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== hardware ==== //

var hardware = mongoose.Schema({

  name:{
    type: String,
  },

  img:{
    type: String,
  }

})

var hardware = mongoose.model('hardwares', hardware);

// ==== Export ==== //

module.exports = hardware;
