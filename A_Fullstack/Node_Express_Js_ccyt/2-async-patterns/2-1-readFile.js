// fs readfile async


const fs = require('fs')

fs.readFile('../content/second.txt', 'utf8', (error,data)=> {
    if(error){
        console.log(error);
    }

    else{
        console.log(data);
    }
})

console.log('I will be printed 1st');

