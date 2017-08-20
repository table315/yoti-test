'use strict';

// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('./config/express');

const app = express();


//listen to the '3000' port
app.listen(3000);

console.log('Server running at http://localhost:3000/');

module.exports = app;