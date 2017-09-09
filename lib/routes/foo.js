const express     = require('express');
const Meetup      = require('../models/meetup');
const User        = require('../models/user');
const Reservation = require('../models/reservation');


const Router = new express.Router();

Router.get("/users", (req, res) => {
  (async () => {
    const users = await User.findAll({
      include: [{
        model: Reservation,
        as: 'reservations',
      }]
    });

    res.send(users);
  })().catch((e) => {
    console.error(e);
    res.sendStatus(500);
  });
});


// POST 모임생성 /meetups
Router.post("/meetups", (req, res) => {
//TODO id는 Oauth되면 거기서
  (async () => {
    const meetup = await Meetup.create({
      title: req.body.title,
      summary: req.body.summary,
      started_at: req.body.started_at,
      ended_at: req.body.ended_at,
      choice_type: req.body.choice_type,
      content: req.body.content
    });
    res.send(meetup);
  })().catch((e) => {
    console.error(e);
    res.sendStatus(500);
  });




});


// POST 예약하기 /meetups/:meetup_id
Router.post("/meetups/:meetup_id", (req, res) => {
//TODO user_id는 Oauth되면 거기서

  db.Publisher.hasMany(db.Books, {foreignKey: 'pub_id'});
// user_id : req.session.user_id //서버가 알고 있다.
  (async () => {
    const reservation = await Reservation.create({
      meetup_id : req.params.meetup_id//모임 id
    })
    res.send(reservation);
  })().catch((e) => {
    console.error(e);
    res.sendStatus(500);
  });
});


module.exports = exports = Router;
