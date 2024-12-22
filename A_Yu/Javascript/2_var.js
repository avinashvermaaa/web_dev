 var kya = "lowda"
 var ne = kya.slice(0,3)     				 // substr
 console.log(ne)
 var neww = kya.slice(1,4)   				 // start_pos and upto but not including last_pos
 console.log(neww)
 
 // length 
 var message = "this mesaage must be under 140 character"
 console.log(140 - message.length)			 // size of var or length of var

// UpperCase and LowerCase
var name = "Avinash" 
var upper_name = name.toUpperCase()
var lower_name = name.toLowerCase()
console.log(name+ " "+upper_name +" "+ lower_name)

// floor and ceil
var five = 5.55
let five_ceil = Math.ceil(five)
let five_floor = Math.floor(five)
console.log(five_ceil)
console.log(five_floor)
