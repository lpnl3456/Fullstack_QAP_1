var http = require('http');
var url = require('url');
var fs = require('fs');


//enter http://localhost:3000/url_demo.html for the program to work
http.createServer(function (req, res) {

  //create a url object
  var q = url.parse(req.url, true);
  //show the url object to the console
  console.log(q);
  //create the  name from q to access the specific fire for the url
  var filename = "." + q.pathname;
  //show the file name in the console
  console.log("fileName:" + filename);
  const fileData = fs.readFileSync(filename,'utf8')
  //state that the file was read
  console.log("file was read");

  //upload the html code to the server
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fileData);

    return res.end();//end the response;
}).listen(3000, ()=> {
    console.log("Server is sucessfully running on port 3000");//show that the server is running
});
