'use strict';

/**
 * Module dependencies.
 */

const FooAPI = require('./routes/foo');
// const MeetUpsAPI = require('./routes/meetups');

module.exports = exports = (app) => {
  app.use(FooAPI);
  // app.use(MeetUpsAPI);
};
