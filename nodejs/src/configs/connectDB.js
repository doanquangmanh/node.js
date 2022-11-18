// get the client
// const mysql = require('mysql2');
import mysql from 'mysql2/promise';

console.log('creating connection pool....') 
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
})
// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'nodejsbasic'
// });
// create connection
// const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test'});
// simple query
// connection.query(
//   'SELECT * FROM `users`',
//     function(err, results, fields) {
//         console.log('>>> check mysql success')
//         let rows = results.map((row) => {return row});
//         console.log(results); // results contains rows returned by server
//         console.log(rows); 
//         // console.log(fields); // fields contains extra meta data about results, if available
//     }
// );
export default pool;

// // with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );