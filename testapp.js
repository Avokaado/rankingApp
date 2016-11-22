var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydb.db');
var check;
db.serialize(function() {

  db.run("CREATE TABLE if not exists stats (name TEXT, points INTEGER)");
  var stmt = db.prepare("INSERT INTO stats VALUES ('Olli', '0')");
  stmt.finalize();

});

db.close();
