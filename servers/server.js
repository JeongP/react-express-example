const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;
const conn = require('./mysql');


var sql = 'select * from tabletest';
conn.query(sql, (err, results, fields) => {
    if (err) console.log(err);
    console.log(results);
})

app.use(cors());
app.use(bodyParser.json());
app.use('/api', (req, res)=> res.json({username:'bryan'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})