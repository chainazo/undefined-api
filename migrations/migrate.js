const dotenv = require('dotenv');
dotenv.load();

const Meetup = require('../lib/models/meetup');
const User = require('../lib/models/user');


Meetup.sync().then(console.log).catch(console.error);
User.sync().then(console.log).catch(console.error);
