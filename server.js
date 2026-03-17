const http = require('http');
const server = http.createServer((req,res)=>{
    const {url,method}=req;
    if (url==="/"&& method==="GET"){
        res.writeHead(401,{"Content-Type":"text/plain"});
        res.end("Hello World")
    }
});
const PORT = 5000;
server.listen(PORT,()=>{
    console.log(`Server listening at http://localhost:${PORT}`)
});


//METHODS
//-----CRUD-----
//POST  (CREATE)
//GET   (READ)
//PUT   (CHANGES SPECIFIC PART OF THE DOCUMENT WHILE UPDATING)
//PATCH (REPLACES FULL DOCUMENT WHILE UPDATING)
//DELETE(DELETEING)