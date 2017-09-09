const express = require('express');
const Meetup = require('../models/meetup');

const Router = new express.Router();
// GET 모든 모임 리스트 조회하기 /meetups

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
