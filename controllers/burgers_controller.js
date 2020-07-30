var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res)=> {
    burger.all(data => {
      var hbsObj = {
        burgers: data
      };
      console.log(hbsObj);
      res.render("index", hbsObj);
    });
  });
  
  
  // Export routes for server.js to use.
  module.exports = router;