import mysql from 'mysql';
import config from '../config';

var connection = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.pass,
    database: config.database.name
});

connection.connect((err) => {
    if (err) {
        console.log(err.message); 
    }
    else {
        console.log('Successfully connected to database!'); 
    }
});

export default connection;
