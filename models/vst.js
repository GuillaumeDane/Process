// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== vst ==== //

var vst = mongoose.Schema({

  _id:{
  type: mongoose.Schema.Types.ObjectId,
},

  name:{
    type: String,
  },

  img:{
    type: String,
  }

});

var vst = mongoose.model('vsts', vst);

// ==== Export ==== //

module.exports = vst;
