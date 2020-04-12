const express = require("express");
const router = express.Router();
const Giphmod = require("../models/giph.js");

router.get("/giph", (req, res, next) => {
  console.log("check this out");
  Giphmod.find({}, "Giphy")
    .then(data => res.json(data))
    .catch(next);
});

router.post("/giph", (req, res, next) => {
  console.log("coolstuffs", req.body);

  Giphmod.create(req.body)
    .then(data => res.json(data))
    .catch(next);
});

router.delete("/giph/:id", (req, res, next) => {
  Giphmod.findOneAndDelete({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router;
