const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(` <p>here is our short history</p>
     <a href="/about"> about_page </a>`);
  }
  if (req.url === '/about') {
    res.end(` <p>here is our short history</p>
     <a href="/"> back_home </a>`
    );
  }

  // console.log(req)
  // res.write('welcome to our home page!')

//   res.end(`
//           <h1> oops </h1>
//           <p> we can't seem to find the page you are looking for </p>
//           <a href ="/">back_home</a>
//           `)

})

server.listen(5000);
