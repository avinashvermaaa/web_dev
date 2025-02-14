console.log("first task");

console.time();

// After every 2000ms(2sec) it gets callbacks.
setInterval(() => {
    console.log("second task");
    console.timeEnd();

}, 2000);

console.log("third task");
