const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const User = module.exports = exports = sequelize.define('users', {
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
  },
});

console.log("models (in user): ", sequelize.models);

process.nextTick(() => {
  const Reservation = require('./reservation');
  const Meetup = require('./meetup');

  User.hasMany(Reservation, {
    foreignKey: "user_id",
    constraints: false,
  });
  User.hasMany(Meetup, {
    foreignKey: "user_id",
    constraints: false,
  });
});
