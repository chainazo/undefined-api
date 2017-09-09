'use strict';


/**
 * Module dependencies.
 */
const cookieParser      = require('cookie-parser');
const bodyParser        = require('body-parser');


module.exports = exports = (app) => {
  if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', true);
  }

  app.use(cookieParser(process.env.SECRET));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
};
