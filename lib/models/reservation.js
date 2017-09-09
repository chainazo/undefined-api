const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Reservation = sequelize.define('reservations', {
  meeting_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.STRING
  },
  state:{
    type: Sequelize.STRING
  },
  reservated_at:{
    type: Sequelize.STRING
  }
});

module.exports = exports = Reservation;
