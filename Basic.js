//compiled as well as interpreted language due to hoisting present in javascript

console.log(userName) //compiler gives a default value to it - undefined for variable
console.log(printUserName("Adrik")) //compiler gives a default value of a function as definition

//node - is built using chromes v8 engine to run javascript on server
console.log("Useful javascript content!!!")

//to execute js file run command
// node <filename> (with path if not in same directory)

var userName = "Anniee"

function printUserName(param) {
    return param
}

console.log(printUserName(userName))
console.log(printUserName("Khan Tran"))


// identifiers are case sensitive
var UserName = "Joseph"

console.log(userName)
console.log(UserName)


//comment => ctrl+/ (toggle)

var UserName = "Joseph"

console.log(userName)
console.log(UserName)

//multiline comment => /* (commented code) */

/*
(commented code) 
var UserName = "Joseph"

console.log(userName)
console.log(UserName)

*/

//When we declare variables we can use - string, alphaneumeric or with special charaters (_ or $)
//variable name must not start with number

var UserName1 = "Joseph"

var User1_Name1 = "Joseph"
//var 1User1_Name1 = "Joseph" //not allowed
//var User1_Name1^ = "Joseph" //not allowed

var _ , $ = "some values"
var $1_identity = "new identity"

console.log( $ )
console.log($1_identity)