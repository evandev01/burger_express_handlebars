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

// router.post("/api/burgers", (req, res) => {
//   console.log("created burger")
//   burger.create(["burger_name"], [req.body.name], (result) => {
//     console.log(result);
//     result.json({ id: this.id })
//   });
// });

router.post("/api/burgers", (req, res) => {
  console.log("created burger")
  burger.create(req.body.name, (result) => {
    console.log(result);
    res.status(200).end();
    // res.render("index", hbsObj);
  });
});

router.put("/api/burgers/:id", (req, res) => {
  var id = "id = " + req.params.id;

  console.log("id", id);

  burger.update(id, (result) => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      // res.status(200).end();
      res.redirect("/")
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