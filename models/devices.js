import dbManager from '../util/database';

const create = () => {
    let sql = "INSERT INTO devices (created_at) VALUES (NOW())";
    dbManager.query(sql, (error, result, fields) => {
        if (error) {
            console.log(error.message); 
        } 
        else {
            console.log(result); 
        }
    })
}

const getForId = (userId) => {
    let sql = "SELECT * FROM devices WHERE id = `${userId}`";
    dbManager.query(sql, (error, result, fields) => {
        if (error) {
            console.log(error.message); 
        } 
        else {
            return result; 
        }
    })
}

export default {
    create,   
    getForId,
};

