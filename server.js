const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'beapineapple',
  database : ''
});
 
app.get('/rodney', (req, res) => {
    connection.query('SELECT * FROM ___ ', function (error, results) {
        if (error){
            console.error(error)
        }else
            res.send(results)
      });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
