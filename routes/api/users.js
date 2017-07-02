import express from 'express';

var router = express.Router();

router.get('/', (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><h1>Users</h1></html>');
});

export default router;
