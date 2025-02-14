
const fs = require("fs")

// fs.writeFile("message.txt", "hello world from node js", (err) =>{

//         if(err) throw err;
//         console.log("your file has been saved!");
// });

fs.readFile("./message.txt","utf-8", (err,data) => {
    if(err) throw err;
    console.log(data);
});