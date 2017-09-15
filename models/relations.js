import dbManager from '../util/database';

const getStatusForUsersWithIds = (userId1, userId2) => {
	let sql = `SELECT status FROM relations WHERE user_one_id = '${userId1}' AND user_two_id = '${userId2}'`;
	return dbManager.query(sql); 
}

const insertPendingRequestForUsers = (userId1, userId2, actionUserId) => {
	let sql = `INSERT INTO relations (user_one_id, user_two_id, status, action_user_id) VALUES (${userId1}, ${userId2}, 0, ${actionUserId})`;
	return dbManager.query(sql);
}

const getAllContactsForUserId = (userId) => {
	let sql = `SELECT * FROM relations WHERE (user_one_id = '${userId}' OR user_two_id = '${userId}') AND (status = 0 OR status = 1)`;
	return dbManager.query(sql);
}

export default {
	getStatusForUsersWithIds,
	insertPendingRequestForUsers,
	getAllContactsForUserId
};

