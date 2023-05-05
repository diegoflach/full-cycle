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
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
        
    const connection = mysql.createConnection(config)
    global.connection = connection;
    
    return connection;
}