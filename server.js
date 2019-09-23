// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var routes = require("./app/routing/htmlRoutes.js")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/home.html"));
  });

  app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "/survery.html"));
  });

app.get("/api/addfriend", function(req, res) {
    return res.json(characters);

});
  
app.get("/api/addfriend/:addfriend", function(req, res) {
    var chosen = req.params.character;
      
    console.log(chosen);
      
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);

        }
    }

return res.json(false);
});

app.post("/api/addfriend", function(req, res) {


  var newCharacter = req.body;


  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});


require("./app/routing/apiRoutes.js")
require("./app/routing/htmlRoutes.js")

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});