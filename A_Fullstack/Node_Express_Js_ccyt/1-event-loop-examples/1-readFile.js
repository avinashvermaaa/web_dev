const fs = require('fs')

console.log('starting first task');

// Check file path as we have to go 2 levels up
fs.readFile('../content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }

    console.log(result);
    console.log('completed first task');
})

console.log('starting next task');
