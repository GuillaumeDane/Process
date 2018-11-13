// ==== modules ==== //

var express = require('express');
var router = express.Router();

// ==== models ==== //

var musicSchema = require('../models/music');

// ==== indexRoute ==== //

router.get('/', function(req, res){
  res.render('createSongs.hbs', {
    title: 'Create',
    css: 'css/createSongs.css'
  });
});

router.post('/', function(req, res){
    let music = new musicSchema();
    music.name = req.body.name;
    music.producer = req.body.producer;
    music.description = req.body.description;
    music.date = req.body.date;
    music.bpm = req.body.bpm;
    music.tonality = req.body.tonality;
    music.software = req.body.software;
    music.vst = req.body.vst;
    music.hardware = req.body.hardware;
    music.save(function(err){
        if (err){
            console.log(err);
            return;
        } else {
            res.redirect('/home');
        }
    });
});

// ==== Export ==== //

module.exports = router;
