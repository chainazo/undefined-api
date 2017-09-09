const express = require('express');
const Meetup = require('../models/user');

const Router = new express.Router();
// GET 모든 모임 리스트 조회하기 /meetups
//TODO user table존재 확인
Router.get("/meetups", (req, res) => {
  console.log("users.js");

    // Meetup.findAll()
    // .then((meetups) => {
    //     res.send(meetups);
    // }).catch((e) => {
    //     console.error(e);
    //     res.sendStatus(500);
    // });
    //

    Meetup.create({
        name: req.body.name
    })
    .then((meetup) => {
        res.send(meetup);
    }).catch((e) => {
        console.error(e);
        res.sendStatus(500);
    });

});

module.exports = exports = Router;
