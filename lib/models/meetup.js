const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Reservation = require('./reservation');

const Meetup = sequelize.define('meetups', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER
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
Meetup.hasMany(Reservation, {
  foreignKey: "meetup_id",
  constraints: false,
});

module.exports = exports = Meetup;
