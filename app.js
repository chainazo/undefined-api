'use strict';

/**
 * Module dependencies.
 */

const
  path        = require('path'),
  dotenv      = require('dotenv'),
  express     = require('express'),
  app         = express();

dotenv.load({ path: path.join(__dirname, '.env') });

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV = 'development';
}

require('./lib/config/express')(app);
require('./lib/routes')(app);

module.exports = app;
