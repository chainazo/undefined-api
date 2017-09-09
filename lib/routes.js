'use strict';

/**
 * Module dependencies.
 */

const MeetupAPI = require('./routes/meetup.js');

module.exports = exports = (app) => {
  app.use(MeetupAPI);
};
