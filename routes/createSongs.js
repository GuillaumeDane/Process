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

  music.name = req.body.name; // -> name
  music.cover = req.body.cover; // -> cover
  music.producer = req.body.producer; // -> producer
  music.description = req.body.process; // -> description
  music.bpm = req.body.bpm; // -> bpm
  music.tonality = req.body.tonality; // -> tonality

// ==== software post ==== //

   music.software.name = req.body.software_name; // -> software -> name
   music.software.description = req.body.software_description; // -> software -> description
   music.software.img = req.body.software_img; // -> software -> img

// ==== vst post ==== //

  music.vst_1.name = req.body.vst_name_1; // -> vst_1 -> name
  music.vst_1.img = req.body.vst_img_1; // -> vst_1 -> img

  music.vst_2.name = req.body.vst_name_2; // -> vst_2 -> name
  music.vst_2.img = req.body.vst_img_2; // -> vst_2 -> img

  music.vst_3.name = req.body.vst_name_3; // -> vst_3 -> name
  music.vst_3.img = req.body.vst_img_3; // -> vst_3 -> img

  music.vst_4.name = req.body.vst_name_4; // -> vst_4 -> name
  music.vst_4.img = req.body.vst_img_4; // -> vst_4 -> img

// ==== hardware post ==== //

  music.hardware_1.name = req.body.hardware_name_1; // -> hardware_1 -> name
  music.hardware_1.img = req.body.hardware_img_1; // -> hardware_1 -> img

  music.hardware_2.name = req.body.hardware_name_2; // -> hardware_2 -> name
  music.hardware_2.img = req.body.hardware_img_2; // -> hardware_2 -> img

  music.hardware_3.name = req.body.hardware_name_3; // -> hardware_3 -> name
  music.hardware_3.img = req.body.hardware_img_3; // -> hardware_3 -> img

  music.hardware_4.name = req.body.hardware_name_4; // -> hardware_4 -> name
  music.hardware_4.img = req.body.hardware_img_4; // -> hardware_4 -> img

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
