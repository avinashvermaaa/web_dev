
function whosPaying(names){
	
	var len  = names.length;
	var index = Math.floor(Math.random() * len);
	var person = names[index];
	
	return person + " is going to buy lunch today!"
}

var names = ["avi","avinash","avik","sonu"]
console.log(whosPaying(names));