const connection = require('../src/db/connection');

const runQuery = (query, callback) => {
    connection.query(query, function(err, result, fields) {
        if (err) throw err;
        return callback(result);
    });
}

const countTitles = (callback) => {
    runQuery(`SELECT COUNT(id) titleCount FROM titles`, callback);
}

const countDescriptions = (callback) => {
    runQuery(`SELECT COUNT(id) descriptionCount FROM descriptions`, callback);
}

const listTitles = (callback) => {
    runQuery(`SELECT * FROM titles`, callback);
}

const listDescriptions = (callback) => {
    runQuery(`SELECT * FROM descriptions`, callback);
}

const tablesCount = (callback) => {
    runQuery(`SELECT (SELECT COUNT(id) FROM descriptions) + (SELECT COUNT(id) FROM titles) tablesCount`, callback);
}

const mergeTables = (callback) => {
    runQuery(`SELECT t.id, t.title, d.description, t.date_created title_date, 
              d.date_created description_date, t.relevance FROM titles t
              INNER JOIN 
              descriptions d
              ON t.description_id = d.id`, callback);
}

module.exports = {
    countTitles,
    countDescriptions,
    listTitles,
    listDescriptions,
    tablesCount,
    mergeTables
}