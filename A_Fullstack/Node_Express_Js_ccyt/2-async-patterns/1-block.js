const http = require('http')

const server = http.createServer((req,res) =>{

    if(req.url === '/')
    {
        res.end('You are at Homepage!')
    }
    if(req.url === '/about')
    {
        console.time() 
        for(let i = 1;i<=20;i++)
        {
            for(let j = 1;j<=1000;j++)
            {
                console.log(`${i} ${j}`);
                
            }
        }
        console.timeEnd()       // time calcualte
        res.end('You are at About section!')
    }
})

server.listen(5000,()=>{
    console.log('server is running at port: 5000');
    
})