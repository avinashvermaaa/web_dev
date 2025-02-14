// const {readFileSync, writeFileSync} = require('fs');
const fs = require('fs')

// fs.readFileSync()
const first = fs.readFileSync('./content/first.txt', 'utf-8');
const second = fs.readFileSync('./content/second.txt', 'utf-8');

fs.writeFileSync('./content/result-sync.txt',
    `here is the result : ${first}, ${second}`,
    {flag : 'a'},
    console.log("helo")
)


console.log(first)
console.log(second)

