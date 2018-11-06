// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== software ==== //

var softwareSchema = new Schema({

  name:{
    type: String,
    require: true
  },

  description:{
    type: String,
    require: true
  },

})

var software = mongoose.model('mongoBase', softwareSchema);

// ==== Export ==== //

module.export = software;
