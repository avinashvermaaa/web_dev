/*
 Instead of using callbacks- and nested callbacks we will use async await 
   to get files written or readen in background
*/

const { readFile, writeFile } = require("fs").promises;

// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile("../content/first.txt", "utf8");
    const second = await readFile("../content/second.txt", "utf8");
    await writeFile(
      "../content/result-mind-grenade.txt",
      `This is Awesome : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

console.log("hello 1");
start();
console.log("hello 2");
