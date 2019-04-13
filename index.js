const fs = require("fs");

let dataFirst = process.argv[2];
let data = fs.readFileSync(dataFirst, "utf8");

// Display the amount of numbers in File
var numCounter = 0;
for (allIndex in data){
  if(!isNaN(parseInt(data[allIndex]))){
    numCounter++;
  }
}
console.log("Total amount of numbers in a file is : "+ numCounter);

//Display the amount of Words

 let lengthData = data.length;

 console.log("Total Number of word in a file is : " +lengthData);
