var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  


var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  



app.post('/userdata', urlencodedParser, function (req, res) {  
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
  console.log(`Example app listening at ${port}`)  
})  

