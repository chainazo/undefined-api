const express = require('express');

const Router = new express.Router;

Router.get("/bar", (req, res) => {
  res.sendStatus(200);
});

module.exports = exports = Router;
