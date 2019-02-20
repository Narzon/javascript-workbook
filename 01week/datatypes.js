//make a variable called name and assign it's value to be your name as a string
const name = 'Nicolai';

//make a variable called userAge and assign it's value to be your age as a number
const userAge = 24;

//create a function called dividedBy, it should take in any two numbers and return the result of the first number divided by the second
const dividedBy = (num1, num2) => {
  return num1/num2;
}

//Display current day and time
let today = new Date()
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
let hours = []
let day = days[today.getDay()]
let hour = today.getHours()
let timeStamp = "A.M."
if (hour > 12) {
  hour = hour - 12
  timeStamp = "P.M."
}
let minute = today.getMinutes()
minute = "" + minute
if (minute.length == 1) {
  minute = "0" + minute
}
console.log("It is "+hour+":"+minute+" "+timeStamp+" on "+day+".")

//Convert number to string
let number = 7
number = "" + number
console.log(typeof(number))
//convert string to number
let string = "7"
string = parseInt(string)
console.log(typeof(string))
//add two numbers together
let five = 5
let seven = 7
let sum = five + seven
console.log(sum)
//print "Both are TRUE" if both are true
let a = true
let b = "yes"
if (a && b) {
  console.log("Both are TRUE")
}
//print "One of these is TRUE" if one is true
let x = false
let y = 10
if (x || y) {
  console.log("One of these is TRUE")
}
//print "Neither is TRUE" when both are false
let i = null
let j = undefined
if (!i && !j) {
  console.log("Neither is TRUE")
}
//create Boolean, Null, Undefined, Number, NaN, and String values
let aBool = true
let aNull = null
let anUndefined = undefined
let aNumber = 56
let aNaN = 0/0
let aString = "Hello"


// function declaration
function isTypeOf(data) {
  if (data === null) {
    return console.log("null")
  }
  if (isNaN(data) && typeof(data) == "number") {
    return console.log("NaN")
  }
  return console.log(typeof data);
}

// function invocation
isTypeOf(aBool);
isTypeOf(aNull);
isTypeOf(anUndefined);
isTypeOf(aNumber);
isTypeOf(aNaN);
isTypeOf(aString);