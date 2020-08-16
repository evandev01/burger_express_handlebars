var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//get route ============================================
router.get("/", (req, res) => {
  burger.all(data => {
    var hbsObj = {
      burgers: data
    };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

//post route ===========================================
router.post("/api/burgers", (req, res) => {
  // console.log(req.body)
  burger.create(`${req.body.name}`, function (response) {

    res.status(200).end();
  });
});

//put route ============================================
router.put("/api/burgers/:id", (req, res) => {
  console.log("in the put route");
  var id = req.params.id;
  console.log("the id is " + id);
  console.log(req.body.devoured);
  burger.update(id, req.body.devoured, (result) => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      // res.redirect("/")
      return res.status(200).end();
    };
  });
});

//delete route =========================================
router.delete("/api/burgers/:id", (req, res) => {
  var id = req.params.id

  burger.delete(id, (result) => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      return res.status(200).end();
    };
  });
});

// Export routes for server.js to use.
module.exports = router;