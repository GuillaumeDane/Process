// ==== modules ==== //

var express = require('express');
var router = express.Router();

// ==== models ==== //

var software = require('../models/software');

// ==== indexRoute ==== //


router.get('/', function(req, res) {
    res.render('insertData.hbs', {
      title: '',
      css: '',
  });
});

router.post('/', function(req, res) {
  let input = new software();
  input.name = req.body.name;
  input.description = req.body.description;
  input.img = req.body.img;
  input.save(function(err) {
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
