
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/survey.html"));
  });

    
  app.get("/addfriend", function(req, res) {
    res.sendFile(path.join(__dirname, "/addfriend.html"));
  });
  
    
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/home.html"));
  });
  
