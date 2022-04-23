//const { application } = require('express');
const express = require('express');
const router = express.Router();
const {Alumnae} = require("../models");

router.get("/", async (req, res) => {
    const listOfAlums = await Alumnae.findAll();
    res.json(listOfAlums);
});

router.post("/", async (req, res) => {
    const Alumnae = req.body;
    await Alumnae.create(Alumnae);
    res.json(Alumnae);
});

module.exports = router;

