// ==== modules ==== //

var express = require('express');
var router = express.Router();

// ==== Models ==== //

var musicSchema = require('../models/music');

// ==== indexRoute ==== //

// ==== Read ==== //

router.get('/:id', function(req, res) {
  musicSchema.findById(req.params.id, function(err, results) {
    if (err) {
      throw err;
    } else {
      res.render('music.hbs', {
        title: 'Music',
        css: '/css/music.css',
        music: results
      });
    }
  });
});

// ==== Export ==== //

module.exports = router;
