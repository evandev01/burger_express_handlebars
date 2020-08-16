// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
     
    create: (name, cb) => {
        orm.create("burgers", name, (res) => {
            cb(res);
        });
    },
    update: (id, devoured, cb)=>{
        orm.update("burgers", id, devoured, (res)=>{
            cb(res);
        });
    },
    delete: (id, cb)=>{
        orm.delete("burgers", id, (res)=>{
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
    module.exports = burger;