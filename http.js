/*
http is used to transfer date to http using node.js. 
To use a http module, a required method is required.
The module is used to create http servers by using the createServer() method. These servers listen to ports
which then gives a response to the user.
*/

var http = require('http');

//create a server :
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the user
  res.end(); //end the response
}).listen(3000); //the server object listens on port 3000

console.log("Server secussfully running  on port 3000 ") //Show that the server loaded in the console