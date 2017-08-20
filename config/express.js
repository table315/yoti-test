'use strict'

const https = require('https'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    express = require('express'),
    fs = require('fs'),
    ejs = require('ejs'),
    hbs = require('express-hbs'),
    path = require('path');


module.exports = function () {

    // Initialize express app
    const app = express();

    // Enable logger
    app.use(morgan('dev'));


    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());


    //Configure view engine
      app.engine('server.view.html', hbs.express4({
        extname: '.server.view.html'
    }));
    app.set('view engine', 'server.view.html');
    app.set('views', path.resolve('./app/views'));

    // Load the routing files
    require('../app/routes/core.server.routes.js')(app);


    app.use(express.static(path.resolve('./public')));

    var httpsServer = https.createServer({
        key: fs.readFileSync(__dirname + '/keys/key.pem'),
        cert: fs.readFileSync(__dirname + '/keys/cert.pem')
    }, app).listen(3000);

    return httpsServer;

}


