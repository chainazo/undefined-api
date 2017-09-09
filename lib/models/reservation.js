const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

// meetup_id: {
//   type: Sequelize.INTEGER,
//   primaryKey: true,
//   autoIncrement: true
// },
const Reservation = module.exports = exports = sequelize.define('reservations', {
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  meetup_id: {
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.STRING
  },
  state:{
    type: Sequelize.INTEGER
  },
  reservated_at:{
    type: Sequelize.STRING
  }
},
{
  indexes:[{unique:true,fields:["meetup_id","user_id"]}]
}
);

console.log("models: ", sequelize.models);

process.nextTick(() => {
  const User = require('./user');
  Reservation.belongsTo(User, {
    foreignKey: "user_id"
  });
});
