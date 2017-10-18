
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

const format = (contacts, relations) => {
	console.log('hi');
	contacts = contacts.sort((c1, c2) => {
		return relations.find((rel) => { return c1.id === rel.user_one_id || c1.id === rel.user_two_id }).status - relations.find((rel) => { return c2.id === rel.user_one_id || c2.id === rel.user_two_id }).status;
	});
	contacts.forEach((contact) => {
		contact.statusCode = relations.find((rel) => { return contact.id === rel.user_one_id || contact.id === rel.user_two_id}).status;
	});
	return contacts;
};

export default {
	getSQLofContactsForRelations,	
	format,
};
