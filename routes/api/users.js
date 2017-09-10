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
   		res.status(200).json(user);
   	}).catch((error) => {
   		next(error);	
   	})
});

router.get('/usernames/:username', (req, res, next) => {
	Users.getAllWithUsername(req.params.username).then((result) => {
		result.length === 0 ? res.status(200).json({}) : res.status(200).json(result);
	});
});

router.put('/:id/updateInfo', (req, res, next) => {
	if (req.body.name) {
		Users.updateNameForId(req.params.id, req.body.name).then((result) => {
			res.status(200).end();
		})
	}
	else if (req.body.description) {
		Users.updateDescriptionForId(req.params.id, req.body.description).then((result) => {
			res.status(200).end();	
		})	
	}
});

export default router;
