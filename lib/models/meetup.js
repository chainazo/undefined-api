const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Meetup = sequelize.define('meetups', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  summary: {
    type: Sequelize.STRING
  },
  started_at: {
    type: Sequelize.STRING
  },
  ended_at: {
    type: Sequelize.STRING
  },
  choice_type: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  },
  location:{
    type: Sequelize.STRING
  }
});

module.exports = exports = Meetup;
