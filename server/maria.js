const maria = require('mysql');

const conn = maria.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'coco',
  password: '1234',
  database: 'maria'
});

module.exports = conn;