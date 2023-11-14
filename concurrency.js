//

//1. Non-concurrent/Blocking way of execution

//Joseph <==> Waiter <==> Kitchen (5 mins - wait)
//Khan <==> Waiter <==> Kitchen (10 mins - wait)
//Annie <==> Waiter <==> Kitchen (15 mins - wait)

//Total Time for all the oders = 5 + 10 + 15 = 30 (mins)


//2. Concurrent/Non-Blocking way of execution (javascript with the help of EventLoop)

//Joseph ==> Waiter <==> Kitchen (5 mins - not-wait) (token1)
//Khan ==> Waiter <==> Kitchen (10 mins - not-wait) (token2)
//Annie ==> Waiter <==> Kitchen (15 mins - not-wait) (token3)

//Total Time for all the oders = Max(5,10,15) = 15 (mins)


//Callback - system present in JS makes is work multithreaded like system without using multiple threads
//Event Loop system is there to help Js for non-blocking calls - LibUV
//SetTimeout/SetInterval/XMLHttpRequest - all are registered callback api's 