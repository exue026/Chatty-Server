import Express from 'express';
import Users from '../../models/users';
import FirebaseAdmin from '../../util/firebase';

var router = Express.Router();

router.get('/', (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'application/json' }); 
    Users.getForId(1).then((result) => {
        let user = result[0];
        res.end(JSON.stringify(user));
    });
});

router.get('/idTokens/:id', (req, res, next) => {
    FirebaseAdmin.decodeIdToken(req.params.id).then((uid) => {
   		return Users.getForUid(uid); 
    }).then((result) => {
   		let user = result[0];	
   		res.json(user);
   	}).catch((error) => {
   		next(error);	
   	})
});

router.put('/:id/updateInfo', (req, res, next) => {
	Users.updateNameForId(req.params.id, req.body.name).then((result) => {
		res.status(200).end();
	})
});

export default router;
