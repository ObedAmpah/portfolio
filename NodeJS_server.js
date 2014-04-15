/* 
 
Server.js Example for node.js

--  This is a refactored version of the code from
	test.js, except for asynchronous callback via
	an event loop so that we aren't waiting for events
	to happen, sequentially

	"Event-driven asynchronous server-side JS with callbacks."

*/

var http = require("http"); 	//First, we're including the http module which we use by requiring and then assigning the result to a variable
var url = require("url");

/* 

Then, we're creating an anonymous function with 
 2 parameters -- this function will be called for every new 
connection that's made

*/

function start() {

	function onRequest(request, response) { //Accepts 2 arguments: request (parameters) & response (send things back)
	
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received."); //Output text whenever the onRequest function (callback) is triggered--and display the pathname

		route(pathname); //We extend the server's start() function in order to enable us to pass the route function

/*

Next, use response object to 

1) response.writeHead, write a header back to the user with 'ok' response code & content type
2) response.write, write a message
3) response.end, end the response

*/
		
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write('Hello World!');
		response.end();

		} //We don't care for the details of the request so we don't use the request object AT ALL
/*

We'll then use the create.Server module to  '.listen' on port 8080 
for incoming requests & output a quick message to the console
for confirmaition

*/

http.createServer(onRequest).listen(8080); 	//The local variable we created became an object carrying all public methods

console.log("Server has started."); //Output text after the server has started--Done immediately

}

exports.start = start; //By exporting parts of its functionality to the scripts that require it, we make server.js a module
