var express = require('express');
var devices = require('./devices');

var router = express.Router();

router.use('/devices', devices);

module.exports = router;
