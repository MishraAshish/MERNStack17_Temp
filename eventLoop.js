//concurrent execution using event loop

// creating multiple callbacks using registered API setTimeOut

console.log("Non Blocking Calls Start") //1
setTimeout(function(){
    console.log("First Call Back") //3

    setTimeout(function(){
        console.log("Fourth Call Back") //4
    },0)
    
},2000)

setTimeout(function(){
    console.log("Second Call Back") //5
},2000)

setTimeout(function(){
    console.log("Third Call Back") //6
},2000)
console.log("Non Blocking Calls Ends") //2