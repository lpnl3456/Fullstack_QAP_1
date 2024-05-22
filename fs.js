//create a server for the readFile method
var http = require('http');
var fs = require('fs');

readFile("fs_demo.html")
createFile("Create_New_File");
updateFile("NewFile")

//This function will read a file and upload it to the server
function readFile(fileName){
http.createServer(function (req, res) {
  //read the code contianed in the fs_demo.html file
  const fileData = fs.readFileSync(fileName,'utf8')
  //state that the file was read
  console.log("file was read");

  //upload the html code to the server
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fileData);

    return res.end();//end the response;
}).listen(3000, ()=> {
    console.log("Server is sucessfully running on port 3000");//show that the server is running
});
}

//create a new file using the appendFile method
function createFile(fileName){

    //create a new txt file using the name the user entered and what should be in it
    fs.appendFile(fileName + '.txt', "New File Created", function (err) {
        if (err) throw err;
        console.log('File Created');//show on the console that the file had successfuly been created
});
}

//function to update and replace the text contianed in a file. 
function updateFile(fileName){

    //use the writeFile method to completly change the text contianed in the specified file.
    fs.writeFile(fileName + '.txt', 'Brand New Text', function (err) {
        if (err) throw err;
        console.log('Text Replaced');//show on the console that the update was successful
      });


}