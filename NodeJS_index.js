/*

	This is the index.js file that starts
	our HTTP Server 

*/

var server = require("./webserver");
var router = require("./router");

server.start(router.route);
