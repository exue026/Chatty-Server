import express from 'express';
import users from '../../models/users';
import firebaseAdmin from '../../util/firebase';

var router = express.Router();

router.get('/', (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'application/json' }); 
    users.getForId(1).then((result) => {
        let user = result[0];
        res.end(JSON.stringify(user));
    });
});

router.post('/idTokens/:idToken', (req, res, next) => {
    firebaseAdmin.decodeIdToken(req.params.idToken)
    res.end();
});

export default router;
