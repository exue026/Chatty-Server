import Express from 'express';
import Users from '../../models/users';
import Relations from '../../models/relations';
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

router.get('/:id/usernames/:username', (req, res, next) => {
	let userId = req.params.id;
	let targetUsername = req.params.username;
	Users.getAllWithUsername(userId, targetUsername).then((result) => {
		let id1 = -1;
		let id2 = -1;
		let promises = result.map((targetUser) => {
			id1 = userId > targetUser.id? targetUser.id : userId;
			id2 = userId > targetUser.id? userId : targetUser.id;
			return Relations.getStatusForUsersWithIds(id1, id2).then((status) => {
				if (status.length > 0) {
					targetUser.statusCode = status[0].status;
				}
				return targetUser;
			});
		});
		Promise.all(promises).then((results) => {
			result.length === 0 ? res.status(200).json({}) : res.status(200).json(results);
		})
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
