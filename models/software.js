// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== software ==== //

var software = mongoose.Schema({

  name:{
    type: String,
  },

  description:{
    type: String,
  },

  img:{
    type: String,
  }
});

var software = mongoose.model('softwares', software);

// ==== Export ==== //

module.exports = software;
