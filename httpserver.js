const { Console } = require('console');
const http = require('http');

const port = process.env.PORT || 3000;

const todolist = ["Omkar", "Harshal", "Pratik"];
const server  = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    // res.end('<h1> Hii Everyone</h1> <p> Hope you are doing good !</p>'),
    res.end(todolist.toString());
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);

});