/*jshint asi: true*/
/*jshint laxcomma: true*/
// BEN POSTLETHWAITE
// JUNE 15th 2012
// APACHE LICENSE

"use strict";
var server = require("node-static")
  , app = require("http").createServer(handler)

app.listen(8081)

//
// BORING SERVER
//
var clientFiles = new server.Server("./")
function handler(request, response) {
  request.addListener('end', function() {
//
// Serve files!
//
    clientFiles.serve(request, response, function(err, res) {
      if (err) { // An error as occured
        console.log("> Error serving " + request.url + " - " + err.message)
        response.writeHead(err.status, err.headers);
        response.end()
      }
      else { // The file was served successfully
        console.log("> " + request.url + " - " + res.message)
      }
    })
  })
}
