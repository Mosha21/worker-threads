const mysql = require('mysql');

const connection = mysql.createConnection({
    database: process.env.MYSQL_DB,
    host     : 'localhost',
    user     : 'root',
    password : 'mypass123'
});

connection.connect();

module.exports = connection;