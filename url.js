/*
The url module is used to split up a web address into diffrent parts.
This is done using the parse() method to create an URL object.
*/

var http = require('http');
var url = require('url');
var fs = require('fs');


// enter http://localhost:3000/url_demo.html for the program to work
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  console.log(q);
  var filename = "." + q.pathname;
  console.log("fileName:" + filename);
  const fileData = fs.readFileSync(filename,'utf8')
  //state that the file was read
  console.log("file was read");

  //upload the html code to the server
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fileData);

    return res.end();//end the response;
}).listen(3000, ()=> {
    console.log("Server is sucessfully running on port 3000");// show that the function has exacuted
});
