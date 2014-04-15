/* 

Hello World Example for node.js

*/

var http = require("http"); //First, we're including the http module

/* 

Then, we're creating a server and passing in an anonymous function 
as a parameter -- this function will be called for every new 
connection that's made

EXAMPLE: execute(function(word) { console.log(word) }, "Hello");

*/

http.createServer(function(request, response) { //Accepts 2 arguments: request (parameters) & response (send things back)
	
/*

Next, use response object to 

1) response.writeHead, write a header back to the user with 'ok' response code & content type
2) response.write, write a message
3) response.end, end the response

*/

	response.writeHead(200, {
		'Content-Type':'text/plain'
	});
	response.write('Hello World!');
	response.end();

/*

Finally, we tell the server to '.listen' on port 8080 
for inconming requests & output a quick message to the console
for confirmaition

*/


}).listen(8080);

console.log("Server Running!");
