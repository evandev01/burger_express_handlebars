var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.all(data => {
    var hbsObj = {
      burgers: data
    };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(["name", "devoured"], [req.body.burgerName, req.body.devouredBtn], (result) => {
    res.json({ id: this.id })
  });
});

router.put("/api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devouredBtn
  }, condition, (result) => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    };
  });
});

router.delete("/api/burgers/:id", (req, res) => {
  var condition = `id = ${req.params.id}`

  burger.delete(condition, (result) => {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      return res.status(200).end();
    };
  });
});


// Export routes for server.js to use.
module.exports = router;