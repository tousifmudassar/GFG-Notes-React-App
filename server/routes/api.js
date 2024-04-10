const express = require("express").Router();

app.get("/", (req, res) => {
  res.json("welcome to /api");
});

module.exports = app;
