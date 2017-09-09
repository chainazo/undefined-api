'use strict';

/**
 * Module dependencies.
 */

const FooAPI = require('./routes/foo');

module.exports = exports = (app) => {
  app.use(FooAPI);
};
