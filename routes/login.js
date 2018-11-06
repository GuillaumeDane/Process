// ==== modules ==== //

var express = require('express');
var router = express.Router();

// ==== indexRoute ==== //

router.get('/', function(req, res){
  res.render('login.hbs', {
    title: 'Login',
    css: 'css/login.css'
  });
});

// ==== Export ==== //

module.exports = router;
