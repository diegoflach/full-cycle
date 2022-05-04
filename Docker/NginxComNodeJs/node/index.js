const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

var people = '';

connection.query("SELECT name FROM people", (err, result) => {
    if(err) throw err;

    for (var row of result) {
        people+= `<li>${row.name}</li>`;
    }
});

connection.end()

app.get('/', (req, res) => {
    res.send(`<h1>Full Cycle Rocks!</h1><ul>${people}</ul>`)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})