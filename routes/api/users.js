import express from 'express';
import users from '../../models/users';

var router = express.Router();

router.get('/', (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'application/json' }); 
    users.getForId(1).then((result) => {
        let user = result[0];
        res.end(JSON.stringify(user));
    });
});

export default router;
