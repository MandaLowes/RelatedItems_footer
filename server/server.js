const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
var connection = require('./config');

const app = express()

const port = 8080


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

 
app.get('/rodney', (req, res) => {
    connection.query('SELECT * FROM mando', function (error, results) {
        if (error){
            console.error(error)
        }else
            res.send(results)
      });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
