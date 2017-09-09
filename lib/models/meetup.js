const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Meetup = sequelize.define('meetups', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titile: {
    type: Sequelize.STRING
  }
});

module.exports = exports = Meetup;
