// ==== module ==== //

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');

// ==== Routes module ==== //

const indexRoutes = require('./routes/index');
const loginRoutes = require('./routes/login');
const homeRoutes = require('./routes/home');
const createSongsRoutes = require('./routes/createSongs');

// ==== init express ==== //

 const app = express();

// ==== hbs parameter ==== //

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/template'
}));

// ==== express static file in public ==== //

app.use(express.static('public'));

// ==== Routes ==== //

app.use('/', indexRoutes);
app.use('/login', loginRoutes);
app.use('/home', homeRoutes);
app.use('/createSongs', createSongsRoutes);

// ==== Server init ==== //

app.listen(3000, function(){
  console.log('tu écoute sur le port 3000 bitch !!!');
})
