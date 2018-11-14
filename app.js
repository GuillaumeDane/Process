// ==== module ==== //

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');

// ==== Database ==== //

const config = require('./config/database');

// ==== MongoDB conect ==== //

 mongoose.connect(config.database, { useNewUrlParser: true })
 let db = mongoose.connection;

// ==== MongoDB conection test ==== //

db.once('open', function(){
    console.log('Connected to MongoDB');
});

db.on('error', function(err)
{
    console.log(err);
});


// ==== init express ==== //

 const app = express();

// ==== Body parser ==== //

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ==== Routes module ==== //

const indexRoutes = require('./routes/index');
const loginRoutes = require('./routes/login');
const homeRoutes = require('./routes/home');
const createSongsRoutes = require('./routes/createSongs');
const musicPageRoutes = require('./routes/music');

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
app.use('/musicPage', musicPageRoutes);
// ==== Server init ==== //

const hostname = 'localhost';
const port = 3000;

app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://" + hostname + ":" + port);
});
