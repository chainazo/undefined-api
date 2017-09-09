const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  encrypted_password:{
    type: Sequelize.STRING
  },
  email:{
    type: Sequelize.STRING
  },
  phone:{
    type: Sequelize.STRING
  }
});

module.exports = exports = User;
