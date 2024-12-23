console.log("gadf")
var lowda = 6.49999
var rounda = Math.round(lowda)
var uppr = Math.ceil(lowda)
var lowr = Math.floor(lowda)

console.log(rounda)
console.log(uppr)
console.log(lowr)

// Ludo Code for random number
var n = Math.random()   // random -> [0,1)
n *= 6
n = Math.ceil(n)

console.log(n)



// Love Calculator
// JavaScript code to take input from the user,
// using the prompt function, with a display message.

var per = Math.random()

per *= 100
per = Math.ceil(per)
console.log("love percentage betwwn you & your crush = ",per)