// ==== modules ==== //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ==== music ==== //

var createUserSchema = mongoose.Schema({

  name:{
    type: String,
  },

  email:{
    type: String,
  },

  password:{
    type: String,
  }
});

var createUser = mongoose.model('createUser', createUserSchema);

// ==== Export ==== //

module.exports = createUser;
