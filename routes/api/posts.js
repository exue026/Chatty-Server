import Express from 'express';
import Posts from '../../models/posts';
import Relations from '../../models/relations';
import Controller from '../controllers/relations-controller';

var router = Express.Router();

router.put('/users/:id', (req, res, next) => {
	Posts.create(req.params.id, req.body.head, req.body.body).then((result) => {
		console.log(result);	
		res.status(200).end();
	});
});

router.get('/users/:id', (req, res, next) => {
	let userId = req.params.id;
	Relations.getAllContactsForUserId(userId).then((result) => {
		let contacts = Controller.getSQLofContactsForRelations(userId, result);
		contacts = contacts.substring(0, 1) + userId + ',' + contacts.substring(1);
		Posts.getPostsForIds(contacts)
		.then((result) => {
			res.status(200).json(result);
		});
	});
});

export default router;
