'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const api_helper = require('./helpers/API_Helpers');

const app = express();
const router = express.Router();

//db connection
mongoose.connect('mongodb+srv://bia:bia@cluster01-aibnj.mongodb.net/test');

//models
const Planet = require('./models/planet');

//routes
const indexRoute = require('./routes/index-route');
const planetRoute   = require('./routes/planet-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute );
app.use('/planets', planetRoute);

app.get('/getAPIResponse', (req, res) => {
	api_helper.make_API_call('https://swapi.co/api/planets/name/')
	.then(response => {
		res.json(response)
	})
	.catch(error => {
		res.send(error)
	})
})

module.exports = app;
 