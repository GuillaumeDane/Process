// ==== modules ==== //

var express = require('express');
var router = express.Router();

// ==== models ==== //

var musicSchema = require('../models/music');
var softwareSchema = require('../models/software');
var vstSchema = require('../models/vst');
var hardwareSchema = require('../models/hardware');

// ==== indexRoute ==== //

router.get('/', function(req, res) {
  vstSchema.find(function(err, results) {
    softwareSchema.find(function(err, results2) {
      hardwareSchema.find(function(err, results3) {
        res.render('createSongs.hbs', {
          title: 'Create',
          css: 'css/createSongs.css',
          vst: results,
          software: results2,
          hardware: results3
        });
      });
    });
  });
});

router.post('/', function(req, res) {
  let music = new musicSchema();
  music.name = req.body.name;
  music.producer = req.body.producer;
  music.description = req.body.process;
  music.bpm = req.body.bpm;
  music.tonality = req.body.tonality;
  music.software = req.body.software;
  music.vst = req.body.vst;
  music.hardware = req.body.hardware;
  music.cover = req.body.cover;
  music.save(function(err) {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect('/home');
    }
  });
});

// ==== Export ==== //

module.exports = router;
