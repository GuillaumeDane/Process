// ==== modules ==== //

var express = require('express');
var router = express.Router();

// ==== models ==== //

var musicSchema = require('../models/music');

// ==== indexRoute ==== //

router.get('/', function(req, res) {
  res.render('createSongs.hbs', {
    title: 'Create',
    css: 'css/createSongs.css',
  });
});

router.post('/', function(req, res) {
  let music = new musicSchema();

  music.name = req.body.name;
  music.cover = req.body.cover;
  music.producer = req.body.producer;
  music.description = req.body.process;
  music.bpm = req.body.bpm;
  music.tonality = req.body.tonality;

// ==== software post ==== //

   music.software.name = req.body.software_name;
   music.software.description = req.body.software_description;
   music.software.img = req.body.software_img;

// ==== vst post ==== //

  music.vst_1.name = req.body.vst_name_1;
  music.vst_1.img = req.body.vst_img_1;

  music.vst_2.name = req.body.vst_name_2;
  music.vst_2.img = req.body.vst_img_2;

  music.vst_3.name = req.body.vst_name_3;
  music.vst_3.img = req.body.vst_img_3;

  music.vst_4.name = req.body.vst_name_4;
  music.vst_4.img = req.body.vst_img_4;

// ==== hardware post ==== //

  music.hardware_1.name = req.body.hardware_name_1;
  music.hardware_1.img = req.body.hardware_img_1;

  music.hardware_2.name = req.body.hardware_name_2;
  music.hardware_2.img = req.body.hardware_img_2;

  music.hardware_3.name = req.body.hardware_name_3;
  music.hardware_3.img = req.body.hardware_img_3;

  music.hardware_4.name = req.body.hardware_name_4;
  music.hardware_4.img = req.body.hardware_img_4;

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
