var sys = require( "sys" );
var http = require( "http" );
 
// Create an HTTP server.
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"content-type": "text/plain"});
  response.write("Hellow world!\n");
  response.end();
});
 
// Listen to port 8080
server.listen(8080);

// Logging 
sys.puts( "Server is running on 8080" );