var express = require('express');

var router = express.Router();

router.all('/', (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><h1>controllers</h1></html>');
});

module.exports = router;
