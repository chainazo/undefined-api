const dotenv = require('dotenv');
dotenv.load();

const Meetup = require('../lib/models/meetup');
const User = require('../lib/models/user');
const Reservation = require('../lib/models/reservation');


Meetup.sync({force:true}).then(console.log).catch(console.error);
User.sync({force:true}).then(console.log).catch(console.error);
Reservation.sync({force:true}).then(console.log).catch(console.error);
