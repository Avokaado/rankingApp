var fs = require("fs");
var file = "test123.db";
var exists = fs.existsSync(file);

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

db.serialize(function() {

  if(!exists) {
    db.run("CREATE TABLE Stuff (numero INT, thing TEXT)");
  }

  var stmt = db.prepare("INSERT INTO Stuff VALUES (?, ?)");

//Insert random data
//  var rnd;
//  for (var i = 0; i < 10; i++) {
//    rnd = Math.floor(Math.random() * 10000000);
    stmt.run(3, "Lorem");
//  }
  
stmt.finalize();

db.each("SELECT numero, thing FROM Stuff", function(err, row) {
    console.log(row.numero + ": " + row.thing);
  });

});

db.close();
