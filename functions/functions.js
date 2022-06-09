// kebab-case-here
// camelCase
// UperrCamelCase
// snake_case


//when I define a function I specify its parameters
function sayHello (greeting, name){
    return `${greeting} ${name}`
}

// I pass in an argument when I call / invoke / run a function 
console.log('function return value is:', sayHello('Greetings', 'Alex'))

var add = function (firstNumber, secondNumber){
  return firstNumber + secondNumber
}
console. log("the sum is:", add(1,5))

/*Task: 20 minutes
1. Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.*/

// for (var element of array){

//}

function getTotalOfArray(numbers){
  // start total at zero
  var total = 0
  // loop around the array
  for (var number of numbers) {
    // number = 1
    // number = 2 
    // number = 3 
    // number = 4 
    // number = 5
    // 'number' could be called anything, just need to match counterpart
    // for each element in the array add to total
    total += number
    // 0 = 0 + 1
    // if you return within the loop then it will be return 1 this is the result of first iteration 
  
  }
  // return the result - this is outside of the loop because we need to know loop is complete before returning total
  return total
}

var arrayToTotal = [1, 2, 3, 4, 5]
console.log("total is:", getTotalOfArray(arrayToTotal))

/*
2. Define an anonymous function expression that takes two arguments:
an object, for example, { name: 'Wojtek', age: 30 }
a string, for exmaple, 'name'

Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.*/

var isKeyInObject = function(object, keyToCheck){
  // get all the keys
  var keys = Object.keys(object)
  // loop around the keys
  for (var key of keys){
    // check if this key matches the keyToCheck
    if (key === keyToCheck){
      // immediately exit the function returning true - don't need to check any more
      return true
    }
  }
  // if we're here we've checked all the keys and not found a match so we can return false
  return false
}
var objectToCheck = { name: 'Wojtek', age: 30 }
// prints false
console.log("is banana key in object", isKeyInObject(objectToCheck, "banana")) 
// prints true
console.log("is name key in object", isKeyInObject(objectToCheck, "name")) 

