import Express from 'express';
import Relations from '../../models/relations';
import Users from '../../models/users';
import Controller from '../controllers/relations-controller';

var router = Express.Router();

//URL is: /api/relations/update?userId1=2&userId2=4&rel=2
router.put('/update', (req, res, next) => {
	let userId1 = Math.min(req.query.userId1, req.query.userId2);
	let userId2 = Math.max(req.query.userId1, req.query.userId2);
	let rel = req.query.rel;
	if (rel === '0') {
		Relations.insertPendingRequestForUsers(userId1, userId2, req.query.userId1).then((result) => {
			res.status(200).end();
		});
	}
});

router.get('/:id/contacts', (req, res, next) => {
	let relations = null;
	Relations.getAllContactsForUserId(req.params.id)
	.then((result) => {
		let listOfContactIds = Controller.getSQLofContactsForRelations(req.params.id, result);
		relations = result;
		return Users.getAllForUserIds(listOfContactIds)	
	}).then((result) => {
		let contacts = Controller.format(result, relations);
		res.status(200).json(contacts);
	});
});

export default router;


