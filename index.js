var express = require("express");

var app = express();

var UserDB = require('./users.json');



app.get('/users', function (reg,res){
	
	res.type('json').status(200).send(UserDB);
	
	
	
});

app.get('/users/:id', function (req,res){
	
	var user = UserDB.filter(function(obj){
		
		return obj.id == req.params.id
		
	})[0];

if (user != null)
	res.type('json').status(200).send(user);
else
	res.status(404).send("Not Found");
	
});

app.use("*", function (req,res){
	res.status(404).send("404: Resource not found");
	
});


app.listen(8081, function(){console.log("live on port 8081")});


/*var express = require("express");

var app = express();

app.get('/',function(req, res){
	
	res.send("hello Joe Joe");
	
	
});
app.get ('/users', function (reg,res){
	res.send("Hello JOJO");
	
	
});

app.get('/users/:id', function (req,res){
	
	res.send("Hello User ID:"+req.params.id);
	
});

app.listen(8081, function(){console.log("live on port 8081")});
*/








/*var http = require("http");
var url = require("url");

http.createServer(function (req,res){
	var queryData = url.parse(req.url);
	
	var pth = queryData.pathname.split("/");

console.log(pth);
	
	res.writeHead(200,{'ContentType':'text/plain'});
	

		res.end('Unknown Request\n');
		

}).listen(8081);

console.log("Server Running!");*/

