var mysql = require('mysql');
var conn = mysql.createConnection({
    host: process.env.MYSYQL_HOST,
    user: process.env.MYSYQL_USER,
    password: process.env.MYSYQL_PASWORD,
    database: process.env.MYSQL_DATABASE
});

conn.connect(function(err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
});