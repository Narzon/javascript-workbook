
//initiate array carsInReverse and then log each element of the array
let carsInReverse = ["Honda", "Dodge", "Toyota", "Ford", "Cadillac"]
for (let i = 0; i < carsInReverse.length; i++) {
	console.log(carsInReverse[i])
}

//initiate object persons
let persons = {
	firstName: "Jane",
	lastName: "Doe",
	birthDate: "Jan 5, 1925",
	gender: "female"
}

//log every key in persons
for (element in persons) {
	console.log(element)
}

//log the birthDate value from persons
for (element in persons) {
	if (element == "birthDate") {
		console.log(persons[element])
	}
}

//while loop to log 1 to 1000
let counter = 1
while (counter < 1001) {
	console.log(counter)
	counter ++
}

//do while loop to log 1 to 1000
let counter2 = 1
do {
	console.log(counter2)
	counter2++
}
while (counter2 < 1001)

// Questions:
// a for loop can specify conditions and iterations, and more explicitly define then when compared to a while loop
// a for loop uses a specified condition to iterate, while a for ... in loop can adapt based on arrays or lists given
// a while loop checks conditions before executing, while a do while loop checks conditions upon finishing each iteration