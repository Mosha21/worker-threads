const express = require('express');
const { Worker } = require('worker_threads');
const mysql = require('mysql');
const port = process.env.PORT;

const connection = mysql.createConnection({
    database: 'ezassi',
    host     : 'localhost',
    user     : 'root',
    password : 'mypass123'
});

connection.connect();

connection.query(`SELECT t.id, t.title, d.description, t.date_created title_date, 
    d.date_created description_date, t.relevance FROM titles t
    INNER JOIN 
    descriptions d
    ON t.description_id = d.id`, function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
});

connection.end();


const app = express();

// Create new worker
const worker = new Worker('./src/worker.js');

// Listen for message
worker.on('message', result => {
    console.log(result);
});

worker.on('error', error => {
    console.log(error);
});

worker.on('exit', exitCode => {
    console.log('Exit code: ' + exitCode)
});

//worker.postMessage(6);
//worker.postMessage(10);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})