// ==== modules ==== //

var express = require('express');
var router = express.Router();

// ==== indexRoute ==== //

router.get('/', function(req, res){
  res.render('index.hbs', {
    title: 'Process',
    css: 'css/style.css'
  });
});

// ==== Export ==== //

module.exports = router;
