// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    all: (tableInput, cb)=>{
        var queryAll = `SELECT * FROM ${tableInput};`
        connection.query(queryAll, (err, result)=>{
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },

    create: (tableInput, name, cb) => {
        var queryCreate = `INSERT INTO ${tableInput} (burger_name) VALUES ('${name}');`
        connection.query(queryCreate, (err, result)=>{
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },

    update: (tableInput, id, cb)=> {
        var queryUpdate = `UPDATE ${tableInput} SET devoured = true WHERE id = ${id};`
        connection.query(queryUpdate, (err, result)=>{
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },

    delete: (tableInput, id, cb)=>{
        var queryDelete = `DELETE FROM ${tableInput} WHERE id = ${id};`
        connection.query(queryDelete, (err, result)=>{
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    }
};


module.exports = orm;