var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var routes = require("./controllers/burgers_controller")
app.use(routes);

app.listen(PORT, ()=>{
  console.log("Server listening on port " + PORT)
});




