// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== vst ==== //

var vst = mongoose.Schema({

  name:{
    type: String,
  },

  img:{
    type: String,
  }

})

var vst = mongoose.model('vsts', vst);

// ==== Export ==== //

module.exports = vst;
