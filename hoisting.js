//var - gets hoisted with default value (undefined)
//functions get hoisted with their definition

console.log(newVariable)

console.log(hoistedFunc("Adrik!!"))

var newVariable = "My test variable"

function hoistedFunc(params) {
    console.log(params)
}

// function newVariable(params) {
//     return params
// }
// console.log(newVariable("Joseph!!"))