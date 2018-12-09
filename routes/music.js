// ==== modules ==== //

var express = require('express');
var router = express.Router();

// ==== Models ==== //

var musicSchema = require('../models/music');
var vstSchema = require('../models/vst');
var softwares = require('../models/software');
var hardwareSchema = require('../models/hardware');


// ==== indexRoute ==== //

router.get('/:id', function(req, res) {
  musicSchema.find(function(err, results) {
    vstSchema.find(function(err, results2) {
      hardwareSchema.find(function(err, results3) {
        musicSchema.findById(req.params.id, function(err, results4) {
          if (err) {
            throw err;
          } else {
            res.render('music.hbs', {
              title: 'Music',
              css: '/css/music.css',
              software: results,
              vst: results2,
              hardware: results3,
              music: results4
            });
          }
        });
      });
    });
  });
  console.log(hardwareSchema);
});


// ==== Export ==== //

module.exports = router;
