import dbManager from '../util/database';

const create = (uid, username) => {
    let sql = `INSERT IGNORE INTO users (username, uid, name, created_at, updated_at) VALUES ('${username}', '${uid}', '${username}', NOW(), NOW())`;
    return dbManager.query(sql);
}

const getForId = (userId) => {
    let sql = `SELECT * FROM users WHERE id = '${userId}'`;
    return dbManager.query(sql);
}

const getForUid = (uid) => {
    let sql = `SELECT * FROM users WHERE uid = '${uid}'`;
    return dbManager.query(sql);
}

const updateNameForUid = (uid, name) => {
    let sql = `UPDATE users SET name = '${name}', updated_at = NOW() WHERE uid = '${uid}'`; 
    return dbManager.query(sql);
}

const updateNameForId = (userId, name) => {
	let sql = `UPDATE users SET name = '${name}', updated_at = NOW() WHERE id = '${userId}'`; 
    return dbManager.query(sql);
}

const removeForUid = (uid) => {
    let sql = `DELETE FROM users WHERE uid = '${uid}'`;
    return dbManager.query(sql);
}

export default {
    create,
    getForId,
    getForUid,
    updateNameForId,
    updateNameForUid,
    removeForUid
};
