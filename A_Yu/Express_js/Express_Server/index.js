// check for ports on cmd "netstat -a"

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1> hello avinash </h1>");
})

app.listen(port, () => {
    console.log(`server is running on ${port}.`);
})