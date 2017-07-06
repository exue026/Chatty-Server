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


export default {
    create,
};
