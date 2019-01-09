//Nicolai Antonov, ACA JS211

//require variables to be initiated
"use strict";

//run each required function with appropriate inputs
currentDate();
checkConversions();
whatType(true);
whatType(NaN);
whatType(100);
whatType("Hello!");
whatType(null);
whatType(undefined);
addTwo(12, 13);
bothTrue(1, 2);
oneTrue("Hello!", undefined);
neitherTrue(NaN, null);

//function to print current date and time
function currentDate() {
//initiate variable d as a new Date object
  const d = new Date();
//use methods to get day/month/year and local time from d
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const n = d.toLocaleTimeString();
//print date and time as a string
  const date = "Today is "+month+"/"+day+"/"+year+". The time is "+n+"."
  console.log(date);
  return;
}

//prints results of conversion functions stringToNum and numToString
function checkConversions() {
  let aString = "10";
  aString = stringToNum(aString);
  let aNum = 10;
  aNum = numToString(aNum);
  console.log(aNum+" was a number, is now a "+typeof(aNum)+".");
  console.log(aString+" was a string, is now a "+typeof(aString)+".");
  return;
}

//takes number input i, appends it to empty string, returns as string
function numToString(i) {
  const newString = ""+i+"";
  return(newString);
}
//takes string input i, parses it for integer, returns as a number
function stringToNum(i) {
  const newInteger = parseInt(i, 10);
  return(newInteger);
}

//Prints a string detailing type of data input
function whatType(i) {
  //compare input to itself to determine if it is specifically NaN
  if (i !== i) {
    console.log("The data type of "+i+" is NaN.")
  //check to see if input is null
  } else if (i === null) {
    console.log("The data type of "+i+" is null.")
  } else {
    console.log("The data type of "+i+" is "+typeof(i)+".");
  };
  return;
}

//Prints a string detailing both inputs and their sum
function addTwo(x, y) {
  const newSum = x + y;
  console.log("The sum of "+x+" and "+y+" is "+newSum+".")
  return;
}

//checks if both inputs are true, and if so, prints a string
function bothTrue(x, y) {
  if (x && y) {
    console.log("The inputs are "+x+" and "+y+".");
    console.log("Both inputs are true!");
  }
  return;
}

//checks if only one input is true, and if so, prints a string
function oneTrue(x, y) {
//if both inputs are true, do not proceed
  if (x && y) {
    return;
   } else if (x || y) {
    console.log("The inputs are "+x+" and "+y+".");
    console.log("One input is true!");
  }
  return;
}

//checks to see if both inputs are false, and if so, prints a string
function neitherTrue(x, y) {
  if (!x && !y) {
    console.log("The inputs are "+x+" and "+y+".");
    console.log("Neither input is true!");
  }
  return;
}