// Import MySQL connection.
var connection = require("./connection.js");

var orm = {

    //mySQL select all query ====================================
    all: (tableInput, cb)=>{
        var queryAll = `SELECT * FROM ${tableInput};`
        connection.query(queryAll, (err, result)=>{
            if (err) throw err;
            // console.log(result);
            cb(result);
        })
    },

    //mySQL insert query to add a new burger =====================
    create: (tableInput, name, cb) => {
        var queryCreate = `INSERT INTO ${tableInput} (burger_name) VALUES ('${name}');`
        connection.query(queryCreate, (err, result)=>{
            if (err) throw err;
            // console.log(result);
            cb(result);
        })
    },

    //mySQL query to change devoured status ====================== 
    update: (tableInput, id, devoured, cb)=> {
        var queryUpdate = `UPDATE ${tableInput} SET devoured = ${devoured}  WHERE id = ${id};`
        connection.query(queryUpdate, (err, result)=>{
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },

    //mySQL delete query to remove a burger ======================
    delete: (tableInput, id, cb)=>{
        var queryDelete = `DELETE FROM ${tableInput} WHERE id = ${id};`
        connection.query(queryDelete, (err, result)=>{
            if (err) throw err;
            // console.log(result);
            cb(result);
        })
    }
};


module.exports = orm;