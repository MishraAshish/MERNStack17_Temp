// In javascript a function can be passed along with its scope as parameter of another function

var heading = "This is from CallBack Function "

function PrintDetails(param1, param2) {
    console.log(heading, param1, param2)
}


function GetUser(UserName, UserAge, callBkFunc) {

    //do some job and then execute callback

    callBkFunc(UserName, UserAge)
}

GetUser("Khan Tran", 28, PrintDetails)

function GetAccount(UserName, UserAge, callBkFunc) {
    callBkFunc(UserName, UserAge)
}

GetAccount("Savings", 28000, PrintDetails)


// create a function arithmatic calculation
// inside that pass, two params
// create 4 different functions - Sum, Substract, Multiply and Divide
// If we pass Sum it should do Sum, same way Substract, Multiply and Divide



//nested function and javascript currying (arrange raw, )

var number1 = 20;

function A(a) {
    //console.log(d) //- scope of variables decrease when we go up
    
    return function B(b) {
        
        return function C(c) {
            
            return function D(d) {
                   return  a + b + c + d + number1
            }
        }
    }   
}

var b = A(5)
var c = b(5)
var d = c(5)
var result = d(5)

console.log(result)

//chain execution

var chainResult = A(10)(10)(10)(10)
console.log(chainResult)