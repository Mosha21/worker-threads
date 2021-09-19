const mysql = require('mysql');

const connection = mysql.createConnection({
    database: 'ezassi',
    host     : 'localhost',
    user     : 'root',
    password : 'mypass123'
});

connection.connect();

module.exports = connection;