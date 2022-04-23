//const { application } = require('express');
const express = require('express');
const router = express.Router();
const {Championships} = require("../models");

router.get("/", async (req, res) => {
    const listOfChamps = await Championships.findAll();
    res.json(listOfChamps);
});

router.post("/", async (req, res) => {
    const championships = req.body;
    await Championships.create(championships);
    res.json(championships);
});

module.exports = router;

