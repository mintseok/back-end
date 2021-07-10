var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'irvine304',
  database:'opentutorials',
  multipleStatements:false
});
db.connect();
module.exports = db;