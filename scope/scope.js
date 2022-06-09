//var name = 'Alex'

var secrectsFunctions = function () {
    var pinCode = [0, 0, 0, 0];
    console.log('pincode inside secrets function', pinCode)
}
secrectsFunctions();
// function called on line 7. This can be called on its own or as part of console.log. If it is not called then the code within the function won't run.
console.log('Name outside of secrets function', name)

var filterNamesByFirstLetter = function (names, letterToFilter){
    var filteredNames = [];
    for (let name of names){
        if (name[0] === letterToFilter){
            filteredNames.push(name);
        }
    }
    //console.log('name after loop', name)
    return filteredNames;
}

var students = ["Sarah", "Kiera", "Brian", "Kelvin", "Tom"]
var filteredStudents = filterNamesByFirstLetter(students, 'K')
//console.log('Filtered students:', filteredStudents) 

//let = says just for this for loop we'll have this one variable called name. Allows us to constrain things. 
//var has more scope so less control 

let isItFive = function(number){
    let result
    if (number === 5){
        result = true
    }else{
        result = false
    }
}
//let declares the variable 'result' but accepts that the value of 'result' can change. 

//const = can never reassign a const variable. 
