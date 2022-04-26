//const { application } = require('express');
const express = require('express');
const router = express.Router();
const {Coaches} = require("../models");

router.get("/", async (req, res) => {
    const listOfCoaches = await Coaches.findAll();
    res.json(listOfCoaches);
});

router.post("/", async (req, res) => {
    const Coaches = req.body;
    await Coaches.create(Coaches);
    res.json(Coaches);
});

module.exports = router;
