// ==== modules ==== //

var express = require('express');
var router = express.Router();

// ==== indexRoute ==== //

router.get('/', function(req, res){
  res.render('createSongs.hbs', {
    title: 'Create',
    css: 'css/createSongs.css'
  });
});

// ==== Export ==== //

module.exports = router;
