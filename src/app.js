const express = require('express');

const app = express();

const router = require('./router');

var bodyParser = require('body-parser');

//use bodyParser() to let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);
app.use(express.json());

module.exports = app;