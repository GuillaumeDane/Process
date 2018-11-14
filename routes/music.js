// ==== modules ==== //

var express = require('express');
var router = express.Router();

// ==== indexRoute ==== //

router.get('/', function(req, res){
  res.render('music.hbs', {
    title: 'Home',
  });
});

// ==== Export ==== //

module.exports = router;
