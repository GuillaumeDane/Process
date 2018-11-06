// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== hardware ==== //

var hardwareSchema = new Schema({

  name:{
    type: String,
    require: true
  },

  description:{
    type: String,
    require: true
  }

})

var hardware = mongoose.model('hardware', hardwareSchema);

// ==== Export ==== //

module.export = hardware;
