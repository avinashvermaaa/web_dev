const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("../content/first.txt", "utf8");
    const second = await readFilePromise("../content/second.txt", "utf8");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

console.log("hello 1");
start();
console.log("hello 2");
console.log("hello 3");
console.log("hello 4");
