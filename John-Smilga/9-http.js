const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    else if(req.url === '/about'){
        res.end('Here is our history');
    }
    else{
        res.end(`
            <h1> OOPS!! </h1>
            <p>The page you are looking for cannot be found</p>
            <a href="/">Go to Home page</a>    
        `)
    }
});

server.listen(5000);