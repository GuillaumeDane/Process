// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== vst ==== //

var vstSchema = new Schema({

  name:{
    type: String,
    require: true
  }

})

var vst = mongoose.model('mongoBase', vstSchema);

// ==== Export ==== //

module.export = software;
