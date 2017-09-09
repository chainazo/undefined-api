const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Reservation = require('./reservation');
const Meetup = require('./meetup');


const User = sequelize.define('users', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement : true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING
  },
  encrypted_password:{
    type: Sequelize.STRING
  },
  email:{
    type: Sequelize.STRING,
    unique: true
  },
  phone:{
    type: Sequelize.STRING
  }
});

User.hasMany(Reservation, {
  foreignKey: "user_id"
});
User.hasMany(Reservation, {
  foreignKey: "user_id"
});
module.exports = exports = User;
