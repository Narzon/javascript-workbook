let cars = ["Ford", "Toyota", "Hyundai", "Dodge"]
console.log(cars.length)
let moreCars = ["Volvo", "Nissan", "Subaru", "Honda"]
let totalCars = cars.concat(moreCars)
console.log(totalCars.indexOf("Honda"))
console.log(totalCars.lastIndexOf("Ford"))
let stringOfCars = totalCars.join(",")
totalCars = stringOfCars.split(",")
let carsInReverse = totalCars.reverse()
carsInReverse = carsInReverse.sort()
alert(carsInReverse.indexOf("Dodge"))
let removedCars = carsInReverse.slice(1,3)
//need to manually remove with splice, as slice does not modify original array
carsInReverse.splice(1,2)
carsInReverse.splice(1,2, "Ford", "Honda")
carsInReverse.push("Hyundai")
carsInReverse.push("Nissan")
console.log(carsInReverse.pop())
console.log(carsInReverse.shift())
carsInReverse.unshift("Lexus")

//create the array numbers and add 2 to each element
let numbers = [23, 45, 0, 2]
numbers.forEach(function(element, i, theList) {
  theList[i] = element + 2
})
console.log(numbers)