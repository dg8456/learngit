var express = require("express");
var app = express();

app.get('/', function(req,res){
   res.sendFile(__dirname+"/www/index.html")
});
   
app.get('/blog', function(req,res){
   res.redirect("https://www.guancha.cn")
});
app.listen(5438, function(res,req){
   console.log("5438端口以开放");
});