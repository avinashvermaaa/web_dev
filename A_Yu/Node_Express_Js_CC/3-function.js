
// const sayHi = (name) => {
//   console.log(`hello there ${name}`);
// };

const names = require('./4-names') 
const sayHi = require('./5-utils')
console.log(names)

const data = require('./6-alternative-flavour')

console.log(data.items)
console.log(data.bob)

require('./7-mind-grenade.js')

sayHi(names.john);
sayHi(names.peter)
sayHi('avi')