var mysql = require('mysql');

const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1111',
  database : 'test'
});


module.exports = conn;