// ==== modules ==== //

var express = require('express');
var router = express.Router();

// ==== models ==== //

var musicSchema = require('../models/music');

// ==== indexRoute ==== //


router.get('/', function(req, res) {
  musicSchema.find(function(err, results1) {
    res.render('home.hbs', {
      title: 'Home',
      css: 'css/home.css',
      music: results1
    });
  });
});

// ==== Export ==== //

module.exports = router;
