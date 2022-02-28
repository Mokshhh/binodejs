var express = require('express');  
var app = express();  
app.get('/index', function (req, res) {  
    res.sendFile( __dirname + "/" + "index.html" );  
 }) 
 
 app.post('/process_post',  function (req, res) {  
    response = {  
        first_name:req.body.first_name,  
        last_name:req.body.last_name  
    };  
    console.log(response);  
    res.end(JSON.stringify(response));  
 })  

 var server = app.listen(8000, function () {  
    var host = server.address().address  
    var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port)  
  })  