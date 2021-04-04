var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) {
        console.log(err);
        return;
    };
    console.log('The solution is: ', rows[0].solution);
});
 
connection.end();