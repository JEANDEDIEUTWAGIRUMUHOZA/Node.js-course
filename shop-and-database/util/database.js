const mysql = require('mysql2');

//create connection to the db
const pool = mysql.createPool({
host: 'localhost',
user: 'root',
database: 'node-complete',
password: ''
});

module.exports = pool.promise();