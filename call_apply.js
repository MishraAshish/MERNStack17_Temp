//Functions - execute in their own execution context (an object which holds some value)
//this - keyword represents the context and keeps on changing upon way of execution
//byDefault if we execute function directly it will be global context

// name = "Joseph"
// age = 20
// session = "Javascripts"


var user = { name:"Danny", age : 21, session : "Javascript" }
var user2 = { name:"Arda", age : 20, session : "OOJS" }


function PrintDetails(comment) {
    //console.log(this)
    console.log(comment)
    console.log(this.name, this.age, this.session)
}


PrintDetails("Learn Call and Apply - Global Context");
PrintDetails.call(user, "Learn Call and Apply - user context");
PrintDetails.call(user2, "Learning in detail - user2 context");

//this - execution context of executing function

// function PrintDetails(comment) {
//     //console.log(this)
//     console.log(comment)
//     console.log(this.name, this.age, this.session)
// }

//call - accepts first parameter which we want to set as execution context (this)
// PrintDetails.call(user, "Setting Execution Context of a function using call");
// PrintDetails.call(user2, "Setting Execution Context of a function using call");

// var myClassObj = new MyClass()
// myClassObj.PrintDetails()


//when we have multiple parameters to print

function GetDetails(concept, session1, session2, session3, session4, session5) {
    //console.log(this)
    console.log(`Call Extension - ${concept}`)

    console.log(`${session1} 
    ${session2} 
    ${session3} 
    ${session4} 
    ${session5} `)

            if (this.name) {
console.log(`The User Details are as below 
Name is - ${this.name}
Age is - ${this.age}
Session is - ${this.session} `)
            } else {
console.log(`Context is not used but parameters are used `)
            }
    
}

GetDetails.call(user, "JS", "Java", "Sprint")

//GetSessionList - returns list of sessions []

var seesionList = ["Synergistic IT ","JS","ES6","NODEJS","Express","React","Redux"];

GetDetails.apply(user, seesionList)
GetDetails.apply(user2, seesionList)

//just in case we dont want to pass any context but we need to set parameters as array
GetDetails.apply(null, seesionList)

//Create two examples to set the context using student and list of subject attended by students, 
//it should use call and apply do describe both the cases
