var express = require("express");
var app = express();

app.get('/', function(req,res){
   res.sendFile("你好")
});
   
app.get('/sw/:pin', function(req,res){
   res.send("收到的脚位编号："+res.params.pin)
});

app.get('/arduino/:pin/:val', function(req,res){
   res.send("收到的脚位编号："+ req.params.pin + "<br>"+"状态：" + req.params.val)
});

app.get('/control', function(req,res){
   var pin = req.query.pin;
   var val = req.query.val;
   
   if (pin != undefined && val != undefined) {
       var html = "脚位：" + pin + "<br>"+"状态：" + val;
       res.send(html);
     } 
    else { 
res.send("没收到数据") ;
     }
});

app.get('/blog', function(req,res){
   res.redirect("https://www.guancha.cn")
});
app.listen(5438, function(res,req){
   console.log("5438端口以开放");
});