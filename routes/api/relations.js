import Express from 'express';
import Relations from '../../models/relations';
import Users from '../../models/users';
import Controller from '../controllers/relations-controller';

var router = Express.Router();

//URL is: /api/relations?userId1=2&userId2=4&rel=2
router.put('/', (req, res, next) => {
	let userId1 = req.query.userId1;
	let userId2 = req.query.userId2;
	let rel = req.query.rel;
	res.status(200).end();
});

router.get('/:id/contacts', (req, res, next) => {
	Relations.getAllContactsForUserId(req.params.id)
	.then((result) => {
		let listOfContactIds = Controller.getSQLofContactsForRelations(req.params.id, result);
		return Users.getAllForUserIds(listOfContactIds)	
	}).then((result) => {
		result.forEach((user) => {
			user.statusCode = 1;	
		});
		res.status(200).json(result);
	});
});

export default router;


