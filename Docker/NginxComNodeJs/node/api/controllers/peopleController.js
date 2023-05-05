'use strict';

module.exports = () => {

    const db = require('../db.js');
    const connection = db.createConnection();
    const controller = {};


    controller.newPerson = function(req, res) {
        connection.query(`INSERT INTO people(name) VALUES('${req.body.name}');`, (err, result) => {
            if(err) throw err;

            res.status(201).end();
        });
    };

    controller.getPeople = function(req, res) {
        connection.query(`SELECT name FROM people;`, (err, result) => {
            if(err) throw err;
            
            res.send(result);
        });
    };

    return controller;
}