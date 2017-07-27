import dbManager from '../util/database';

const create = (uid, username) => {
    let sql = "";
    return dbManager.query(sql)
}

const getForId = (userId) => {
    let sql = "SELECT * FROM devices WHERE id = " + userId.toString();
    return dbManager.query(sql);
}

export default {
    create,   
    getForId
};

