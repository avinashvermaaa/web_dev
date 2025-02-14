var a = 8;
var b = 5;

console.log("old value of a: " + a);
console.log("old value of b: " + b);

a = a + b;
b = a - b;
a = a - b;

console.log("new value of a: " + a);
console.log("new value of b: " + b);
