import dbManager from '../util/database';

const create = (userId, postHead, postBody) => {
	let sql = `INSERT INTO posts (head, body, user_id) VALUES ('${postHead}', '${postBody}', ${userId})`;
	return dbManager.query(sql);
};

const getPostsForIds = (ids) => {
	let sql = `SELECT * FROM posts WHERE user_Id in ${ids} ORDER BY id DESC`;
	return dbManager.query(sql);
};

export default {
	create,
	getPostsForIds,
}

