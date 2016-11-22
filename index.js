//Load modules
var sqlite3         =       require('sqlite3').verbose();
var db              =       new sqlite3.Database('kokeilu.db');

//db.run("CREATE TABLE stats (name text, points integer, won integer, lost integer)");

//Perform SELECT Operation
db.all("SELECT * from stats");

//Perform INSERT operation.
//db.run("INSERT into stats(name, points, won, lost) VALUES (Olli, 0,0,0)");

//Perform DELETE operation
//db.run("DELETE * from table_name where condition");

//Perform UPDATE operation
//db.run("UPDATE table_name where condition");