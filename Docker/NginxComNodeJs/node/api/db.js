'use strict';

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const mysql = require('mysql')

exports.createConnection = function()
{
    return mysql.createConnection(config)
}