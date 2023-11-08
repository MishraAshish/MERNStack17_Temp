// DataTypes are storage type to store various types of data like - int, char, string, bool etc

//We've 6 data types in javascript as below
// String, Number, Boolean, Undefined, Null, Object

// in ES6 above we can have Symbol as data

//var val = 98989898.9898989898
var valued = 'N' // "New String Value"

console.log(valued)
console.log(typeof valued) //string

// var valued = 'M' //redeclare
// console.log(valued)

valued = 121 // re-assign
console.log(valued)
console.log(typeof valued) // number - dynamic typing or dynamic casting

valued = 121.121 // re-assign
console.log(valued)
console.log(typeof valued)

//object - in json format
var newUsr = {
    name : "Tom",
    friend : "Jerry"
}

valued = newUsr
console.log(valued)
console.log(typeof valued) //object


valued = 10 == 9 //false
console.log(valued)
console.log(typeof valued) //boolean

valued = true
console.log(valued)
console.log(typeof valued) //boolean
 
valued = null // its a valid data/value
console.log(valued)
console.log(typeof valued) // object

valued = undefined // its a valid data/value
console.log(valued)
console.log(typeof valued) // undefined


// ES6 : gives and independent data type - Symbol

var symbolVal = Symbol("My New Symbol Data")

console.log(symbolVal)
console.log(typeof symbolVal) 