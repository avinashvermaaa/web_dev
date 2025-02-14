const path = require('path')
console.log(path.sep)

// filepath
const filepath = path.join('./content', 'subfolder', 'test.txt')
console.log(filepath)

// base file name
const base = path.basename(filepath)
console.log(base)

// absolue path
const absolute = path.resolve(__dirname,'content','subfolder', 'test.txt')
console.log(absolute)

// const path = require('path')
