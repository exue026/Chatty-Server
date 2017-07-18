import express from 'express';

var router = express.Router();

router.all('/', (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><h1>Controllers</h1></html>');
});

export default router;
