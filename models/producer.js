// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== producer ==== //

var producerSchema = new Schema({

  name:{
    type: String,
  },

  email:{
    type: String,
  },

  music:{
    type: String,

  }

})

var producer = mongoose.model('producer', producerSchema);

// ==== Export ==== //

module.export = artist;
