import dbManager from '../util/database';

const create = (uid, username) => {
    let sql = `INSERT IGNORE INTO users (username, uid, created_at, updated_at) VALUES ('${username}', '${uid}', NOW(), NOW())`;
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

const updateForUid = (uid, firstname, lastname, description) => {
    let sql = `UPDATE users SET firstname = '${firstname}', lastname = '${lastname}', description = '${description}', updated_at = NOW() WHERE uid = '${uid}'`; 
    return dbManager.query(sql);
}

const updateForId = (userId, firstname, lastname, description) => {
    let sql = `UPDATE users SET firstname = '${firstname}', lastname = '${lastname}', description = '${description}', updated_at = NOW() WHERE uid = '${userId}'`; 
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
    updateForId,
    updateForUid,
    removeForUid
};
