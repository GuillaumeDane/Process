// ==== modules ==== //

var express = require('express');
var router = express.Router();

// ==== indexRoute ==== //

router.get('/', function(req, res){
  res.render('home.hbs', {
    title: 'Home',
    css: 'css/home.css'
  });
});

// ==== Export ==== //

module.exports = router;
