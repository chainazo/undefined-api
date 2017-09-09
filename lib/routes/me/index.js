const express     = require('express');
const Meetup      = require('../../models/meetup');
const User        = require('../../models/user');
const Reservation = require('../../models/reservation');

const Router = new express.Router();


Router.route('/meetups/created')
.get((req, res)=>{
// GET 내가 만든 모임 보기 /me/meetups/created
  (async () => {
    const createdMeeting = await User.findAll({
      include: [{
        model: Meetup,
        as: 'meetups',
      }]
    });
    res.send(createdMeeting);
  })().catch((e) => {
    console.error(e);
    res.sendStatus(500);
  });
});

// GET 내가 참여하는 모임 /me/meetups/attending
Router.route('/meetups/attending')
.get((req, res)=>{
  (async () => {
    const attendMeeting = await User.findAll({
      include: [{
        model: Reservation,
        as: 'reservations',
      }]
    });
    res.send(attendMeeting);
  })().catch((e) => {
    console.error(e);
    res.sendStatus(500);
  });
});

module.exports = exports = Router;
