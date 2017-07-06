import dbManager from '../util/database';

const create = () => {
    let sql = "";
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
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM users WHERE id = ?";
        dbManager.query(sql, [userId.toString()], (error, result, fields) => {
            if (error) {
                reject(error);
            } 
            else {
                resolve(result);
            }
        }) 
    });
}

export default {
    create,
    getForId,
};
