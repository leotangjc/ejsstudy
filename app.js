var express = require("express");
var routes = require("./routes");
var app = express();

app.set("view engine",'ejs');
app.use(express.static(__dirname+"/static"));

app.get("/",routes.index);
app.listen(3002)


//未完成






















// var http = require("http");
// var express = require("express");
// var app = express();
// http.createServer(app);
//
// app.get("/",function(req, res) {
//   console.log("成功进入");
//   res.send("成功");
//
// });
//
//
// app.listen(3002);