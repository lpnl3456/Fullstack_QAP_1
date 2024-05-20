const moment= require('moment')

//format the current date to be MM, DD, YYYY
let formatedDate = moment().format('MMM Do YYYY');
console.log(formatedDate);

//format the current time to be h:mm:ss
 formatedDate = moment().format('h:mm:ss');
console.log(formatedDate);

//format the current time to be MM DD YYYY, h:mm:ss
formatedDate = moment().format('MM Do YYYY, h:mm:ss');
console.log(formatedDate);

//How to set relative time
//Determine the amount of hours left in the day
let amountOfHoursLeft = moment().endOf('day').fromNow(); 
console.log("The day will end " + amountOfHoursLeft);

//Determine how many hours have past since the start of the day
let hoursSinceDayStarted = moment().startOf('day').fromNow(); 
console.log("The day started " + hoursSinceDayStarted);

//Clander Time
//set the date to be 20 day ago
let newDate = moment().subtract(20, 'days').calendar();
console.log(newDate);

//set the date to 1 be month ago
 newDate = moment().subtract(1, 'month').calendar();
console.log(newDate);

//set the date to be one year in advance
newDate = moment().add(1, 'year').calendar();
console.log(newDate);



