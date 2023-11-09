//functions - are first class member citizens in js, backbone of js, js is functional programming lang.
//It is responsible to give behaviour to be used to achieve certain job

// user - class > getUserDetails - method/functions
//keyword - function

//every function is pure function - it must have return statement //if not then js by default return undefined

//1. named function
function myFunc(params) {
    //return params
    return params
}

console.log(myFunc("Test Javascript"))

//2. function expression
var myFuncExprsn = function (params) {
    return params
}

console.log(myFuncExprsn("Test Javascript - Function Expression"))

//3. constructor function - used as class
function funcCtr(name, age, address) {
    this.Name = name,
    this.Age = age,
    this.Address = address,
    this.getUserDetails = function () {
        return {
            Name : this.Name,
            Age : this.Age,
            Address : this.Address,
            Session : this.Session
        }
    }
}

//instantiated like a class using new - keyword
var user = new funcCtr("Anniee", 22, "Somewhere on earth")
console.log(user.getUserDetails())
user.Session = "Javascript!!"

console.log(user.getUserDetails()); //semi-colon added to help IIFE execute

//4. IIFE - immediately invocable function expressions (used to execute for one time only - Singleton)

(function IIFE(params) {
    console.log(params)
})("Annie!!")

// IIFE("Khan Tran")
// IIFE("Joseph Tran")
// IIFE("Adrik")

//5. nested function - function within function (next is dependent on previous one)

function A(params) {
    var a = "Top Var" //none of the declarations present in child function can be accessed
    function B(params) {
        var b = "Mid Var"
        function C(params) {
            var c = "Bottom Var"
            //can access all variables declared above
        }
    }    
}