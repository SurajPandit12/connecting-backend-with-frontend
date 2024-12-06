const express= require("express");
const cors= require("cors");

const server = express();

server.use(cors())

server.get('/demo', (req, res) =>{
    res.send("hello");
})

server.listen(8080, ()=>{
console.log("Server started");

})