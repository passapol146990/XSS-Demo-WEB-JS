const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'test',
  password: '123456',
  database: 'db'
});

module.exports = pool.promise();
