var express = require('express'); //引入express
var app = express();  //创建express的实例

app.get('/', function(req, res){
    res.send('Hello World'); //服务器响应请求
});


app.listen(4399,function(){   //监听3000端口
    console.log("Server running at port 3000");
});