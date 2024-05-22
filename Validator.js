//validate a string to make sure it is a flaot
var validator = require('validator')
 let demoString = '40.06';

 if(validator.isFloat(demoString) === true){
    console.log(demoString + " is a float");
 }

 else{
    console.log(demoString + " is not a float");
 }

 //change the value to not be a float
 demoString = '$56';

 if(validator.isFloat(demoString) === true){
    console.log(demoString + " is a float");
 }

 else{
    console.log(demoString + " is not a float");
 }

 //validate an email
 demoString = 'luke@gmail.com';

 if(validator.isEmail(demoString) === true){
    console.log(demoString + " is an email");
 }

 else{
    console.log(demoString + " is not an email");
 }

 //change the value to not be an email
 demoString = 'lukegmail.com';

 if(validator.isEmail(demoString) === true){
    console.log(demoString + " is an email");
 }

 else{
    console.log(demoString + " is not an email");
 }