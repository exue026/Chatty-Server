import dbManager from '../util/database';

const create = () => {
    let sql = "INSERT INTO devices (created_at) VALUES (NOW())";
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

