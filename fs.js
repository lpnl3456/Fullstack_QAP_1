/*
fs stands for File SYstem and is used to work with files on a computer.
The module is capibilbe of reading, creating, 
updatig, deleting or renaming files on a computer.
*/

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

    return res.end();//end the response
  ;
}).listen(3000, ()=> {
    console.log("Server is sucessfully running on port 3000");// show that the function has exacuted
});
}

//Create a new file using the appendFile method
function createFile(fileName){

    //Create a new txt file using the name the user entered and what shpuld be in it
    fs.appendFile(fileName + '.txt', "New File Created", function (err) {
        if (err) throw err;
        console.log('File Created');//Show on the console that the file had successfuly been created
});
}

//function to upade and replace the tet contianed in a file. 
function updateFile(fileName){

    //User the writeFile method to completly change the tet contianed in the specified file.
    fs.writeFile(fileName + '.txt', 'Brand New Text', function (err) {
        if (err) throw err;
        console.log('Text Replaced');// Show on the console that the update was successful
      });


}