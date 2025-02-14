var name = "avinash"
if(name === "avinash") console.log("yes")
else console.log("no") 
console.log(typeof(name))

//  === checks data type as well 
// == checks only value is equal or not

var one = 1
var two = 1
if(one == two) console.log("yes value is same")
if(one === two) console.log("yes datatype also same")

var year = 2100

if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 )
{
console.log("Leap year")
    
}

else console.log("Not leap year.")