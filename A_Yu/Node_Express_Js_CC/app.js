const fs = require('fs')

const first  = fs.readFileSync('./content/first.txt', 'utf-8');
const second  = fs.readFileSync('./content/second.txt', 'utf-8');

fs.writeFileSync('./content/result-sync.txt',
     `hello this is the message ${first}, ${second}`
)

console.log(first)
console.log(second)
