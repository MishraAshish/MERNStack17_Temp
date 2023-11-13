// OOP's fundamentals -
//1. Inheritance - constructor function in es5 and then classes in es6, prototype is the only way
//2. Encapsulation - data hiding can be done through closures, with the help of access modifiers
//3. Polymorphism - Overriding (it supports in function as well in classes) and OverLoading (doesnot support overloading)
//4. Abstraction - Not required in js

// Closures : A phenomenon when we have two nested functions and the parent function returns child one, at the time of return
// child function only return some required properties and others are kep private.

// function Closures(params) {
//     //function properties
//     var func = function(){}//return things that needs to be accessed
//     return func
// }

function Account(name, address, type) {
    var AccName = name
    var Address = address //private
    var AcctType = type
    var UserID = name
    var AccBal = "$2500" //public
    var AccPwd = "adasdaskjk12343$%" //private
    
    var funcGetDetails = function(userID, pwd){
        if (userID == name && pwd == AccPwd) {
            return{
                AccName : AccName, //short hand
                AcctType, //just declare one and ES6 will create key value pair
                AccBal
            }
        } else {
            return {
                Alert : "Wrong Passwod"
            }
        }        
    } 
    return funcGetDetails
}

var closureObj = Account("Annie", "US", "Savings")

console.log(closureObj("Annie", "adasdaskjk12343$%"))
console.log(closureObj("Annie", "3323ad$%"))

//try creating closure structure for student object, keeping their internal marks as private