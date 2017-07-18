import dbManager from '../util/database';

const create = () => {
    let sql = "";
    return dbManager.query(sql);
}

const getForId = (userId) => {
    let sql = "SELECT * FROM users WHERE id = " + userId.toString();
    return dbManager.query(sql);
}

export default {
    create,
    getForId
};
