const express = require('express');
const Meetup  = require('../models/meetup');
const User    = require('../models/user')

const Router = new express.Router();
// POST 모임생성 /meetups
Router.post("/meetups", (req, res) => {
//TODO id는 Oauth되면 거기서
  (async () => {
    const meetups = await Meetup.create({
      title: req.body.title,
      summary: req.body.summary,
      started_at: req.body.started_at,
      ended_at: req.body.ended_at,
      choice_type: req.body.choice_type,
      content: req.body.content
    })
    res.send(meetups);
  })().catch((e) => {
    console.error(e);
    res.sendStatus(500);
  });


  // .then((meetup) => {
  //     res.send(meetup);
  // }).catch((e) => {
  //     console.error(e);
  //     res.sendStatus(500);
  // });
});

Router.get("/bar", (req, res) => {
    // Meetup.findAll()
    // .then((meetups) => {
    //     res.send(meetups);
    // }).catch((e) => {
    //     console.error(e);
    //     res.sendStatus(500);
    // });
    //

    Meetup.create({
        title: req.body.title
    })
    .then((meetup) => {
        res.send(meetup);
    }).catch((e) => {
        console.error(e);
        res.sendStatus(500);
    });

});

module.exports = exports = Router;
