// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== producer ==== //

var producerSchema = new Schema({

  name:{
    type: String,
    require: true
  },

  email:{
    type: String,
    require: true
  },

  music:{
    type: String,
    require: true
  }
  
})

var producer = mongoose.model('producer', producerSchema);

// ==== Export ==== //

module.export = artist;
