var express = require("express");
var app = express();

app.get ('/', function(req,res) {
   res.send("欢迎光临");
});
app.listen(5438, function(req,res){
   console.log("5438 port on service");
})