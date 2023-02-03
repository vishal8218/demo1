
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root82",
  database:'sakila'
});


con.connect(function(err) {
  if (err) throw err;
  console.log('connected')
  
  var sql="insert into Personss (Name,Pass ) values ?";
var values=[[a,p],['Pushpinder','Anita']];
  con.query(sql ,[values],function (err, result) {
    if (err) throw err;
    console.log("2 record inserted");
    document.write("inserted");
  });
});
