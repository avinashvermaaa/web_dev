const { readFile, writeFile } = require("fs");

console.log('start 1st task')
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err,result) => {
    if(err){
        console.log(err)
        return
    }
    const second = result
    writeFile('./content/result-async.txt', 
        `here is the result using async : ${first}, ${second}`,
        (err,result) =>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with 1st task')
        }
    )
  })
})
console.log('starting 2nd task');
