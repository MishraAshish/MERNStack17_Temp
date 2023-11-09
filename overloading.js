//Overloading - Same name function with different number of params or type of params
//We have no concept of overloading in JS functions we have overwriting

Sum(1,2,3) //in hoisting also last defined function replces other hoists

function Sum(a, b) {
    console.log(a+b+"Two Params")
    return a + b
}

function Sum(a, b, c) {
    console.log(a,b,c,"Three Params")
    return a + b + c
}

function Sum(a) {
    console.log(a+" One Params")
    return a
}


Sum(1,2) //3 - Two Params
Sum(1,2,3) // 6 - Three Params