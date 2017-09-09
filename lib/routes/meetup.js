const express     = require('express');
const Meetup      = require('../models/meetup');
const User        = require('../models/user');
const Reservation = require('../models/reservation');

const Router = new express.Router();


const meetups = require('./meetups');
Router.use('/meetups', meetups);

const me = require('./me');
Router.use('/me', me);

const router = express.Router();



module.exports = exports = Router;
