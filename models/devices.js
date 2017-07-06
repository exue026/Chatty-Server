import dbManager from '../util/database';

const create = () => {
    let sql = "";
    dbManager.query(sql, (error, result, fields) => {
        if (error) {
            console.log(error.message); 
        } 
        else {
            console.log(results); 
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
            return fields; 
        }
    })
}

export default {
    create,   
    getForId,
};

