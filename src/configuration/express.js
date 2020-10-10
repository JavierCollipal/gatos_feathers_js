const express = require('@feathersjs/express');
const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');

module.exports = function (app) {
	// Enable security, CORS, compression, favicon and body parsing
	app.use(helmet());
	app.use(cors());
	app.use(compress());
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
	// Host the public folder
	app.use('/', express.static(app.get('public')));
};
