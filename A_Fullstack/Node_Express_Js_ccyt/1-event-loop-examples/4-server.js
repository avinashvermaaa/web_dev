const http = require('http')

const server = http.createServer((req,res) =>{
    console.log('requested event ');
    res.end('kya re bkl')
})

server.listen(5000,() =>{
    console.log('server is running at port: 5000');
    
})