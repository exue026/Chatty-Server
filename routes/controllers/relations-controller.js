
const getSQLofContactsForRelations = (userId, relationsArr) => {
	userId = parseInt(userId);
	if (relationsArr.length === 0) {
		return null;	
	}
	let contactId = null;
	let sql = '(';
	relationsArr.forEach((relation, index) => {
		contactId = userId === relation.user_one_id ? relation.user_two_id : relation.user_one_id;
		sql += contactId;
		if (index !== relationsArr.length - 1) {
			sql += ','	
		}
	});
	sql += ')';
	return sql;
};

export default {
	getSQLofContactsForRelations,	
};
