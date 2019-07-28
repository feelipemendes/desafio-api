'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//db connection
mongoose.connect('mongodb+srv://feelipemendes:Bia%402019@cluster01-aibnj.mongodb.net/test?retryWrites=true&w=majority');

//routes
const indexRoute = require('./routes/index-route');
const planetRoute   = require('./routes/planet-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute );
app.use('/planets', planetRoute);

module.exports = app;
 