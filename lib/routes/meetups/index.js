const express     = require('express');
const Meetup      = require('../../models/meetup');
const User        = require('../../models/user');
const Reservation = require('../../models/reservation');

const Router = new express.Router();


// POST 모임생성 /meetups
Router.route('/')
.get((req,res)=>{
// GET 모든 모임 리스트 조회하기 /meetups
  (async () => {
    const meetups = await Meetup.findAll({
      order: [['id', 'ASC']]
    });
    res.send(meetups);
  })().catch((e) => {
    console.error(e);
    res.sendStatus(500);
  });

})
.post((req, res) => {
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

// GET 모임 상세조회하기  /meetups/:meetup_id
Router.route('/:meetup_id')
.get((req, res) =>{
  (async () => {
    const meetupDetail = await Meetup.find({
      where: {id: req.params.meetup_id},

    })
    res.send(meetupDetail);
  })().catch((e) => {
    console.error(e);
    res.sendStatus(500);
  });
})
.post((req, res) => {
/*
  POST 예약하기 /meetups/:meetup_id
  user_id : req.session.user_id //서버가 알고 있다.
  TODO user_id는 Oauth되면 거기서
*/
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
