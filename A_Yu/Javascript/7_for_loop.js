var array = []

for( var i=0;i<10;i++)
{
	console.log(i)
	array.push(i)
}
console.log(array)

// finonacci sequence
function fibo(n)
{
	var array = [];
	if(n===1){
		array = [0];
	}
	else if(n===2){
		array = [0,1]
	}
	else{
		array = [0,1]
		
		for(var i = 2;i<n;i++){
			array.push(array[array.length - 2] + array[array.length - 1])
		}
	}
	
	return array
}

arrays = fibo(5)
console.log(arrays)