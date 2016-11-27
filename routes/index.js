var express = require('express');
var router = express.Router();

var db = require('../queries');

// GET all bike data
router.get('/bikes', db.getAllBikes);

// GET single set of bike data
router.get('/bikes/:id', db.getSingleBike);

// GET all formatted bikes
router.get('/bikes/formatted', db.getAllFormatedBikes);

module.exports = router;
