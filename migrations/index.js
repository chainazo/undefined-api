const dotenv = require('dotenv');
dotenv.load();

const Meetup = require('../lib/models/meetup');
const User = require('../lib/models/user');
const Reservation = require('../lib/models/reservation');

(async () => {
  await User.sync({force:true});
  await Meetup.sync({force:true});
  await Reservation.sync({force:true});
})().catch(console.error);
