import mysql from 'mysql';
import config from '../config';

var pool = mysql.createPool({
    host: config.database.host,
    user: config.database.user,
    password: config.database.pass,
    database: config.database.name,
    connectionLimit: config.database.numConnections
});

const query = (queryString) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                reject(error); 
                return;
            } 
            connection.query(queryString, (error, result, fields) => {
                connection.release();
                if (error) {
                    reject(error);
                    return;
                } 
                resolve(result);
            });
        });
    });
}


export default {
    query,
};
