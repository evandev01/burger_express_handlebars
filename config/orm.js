// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    all: (tableInput, cb)=>{
        var queryAll = `SELECT * FROM ${tableInput};`
        connection.query(queryAll, (err, result)=>{
            if (err) throw err;
            cb(result);
        })
    },
};


module.exports = orm;