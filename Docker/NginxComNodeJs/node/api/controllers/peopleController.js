'use strict';

const db = require('../db.js');
const connection = db.createConnection();

exports.newPerson = function(req, res) {
    connection.query(`INSERT INTO people(name) VALUES('${req.body}');`, (err, result) => {
        if(err) throw err;
    });
    
    connection.end()
};

exports.getPeople = function(req, res) {
    connection.query(`SELECT name FROM people;`, (err, result) => {
        if(err) throw err;
        
        res.send(result);
    });
    
    connection.end()
};