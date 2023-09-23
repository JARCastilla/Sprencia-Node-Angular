const mysql = require('mysql2');


const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'xxxx',
  port: 3306,
  database: 'sprencia'
});

global.db = pool.promise();