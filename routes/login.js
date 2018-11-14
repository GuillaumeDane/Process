// ==== modules ==== //

var express = require('express');
var router = express.Router();

// ==== models ==== //

var createUserSchema = require('../models/createUser');

// ==== indexRoute ==== //

router.get('/', function(req, res){
  res.render('login.hbs', {
    title: 'Login',
    css: 'css/login.css'
  });
});

router.post('/', function(req, res){
    let createUser = new createUserSchema();
    createUser.name = req.body.name;
    createUser.email = req.body.email;
    createUser.password = req.body.password;
    createUser.save(function(err){
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
