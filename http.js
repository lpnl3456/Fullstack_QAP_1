var http = require('http');

//create a server :
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the user
  res.end(); //end the response
}).listen(3000); //the server object listens on port 3000

console.log("Server secussfully running  on port 3000 ") //show that the server is running in the console