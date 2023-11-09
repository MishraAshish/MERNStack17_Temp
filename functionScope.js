//each function can access anything in global or parent scope and follows hoisting for each function definition

console.log(globalVal) //undefined

var globalVal = "New Value"

function printVal() {  //globalVal - undefined
    console.log(globalVal) //undefined //New Value

    //var globalVal = "Child Value" //hoist the value on printVal - top

    //console.log(globalVal) //Child Value
}

printVal();

console.log(globalVal) //"New Value"