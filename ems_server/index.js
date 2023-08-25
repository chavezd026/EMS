//import express
const express = require("express");

//import cors
const cors = require("cors");

//import logic
const logic = require('./services/logic')

//create server
const server = express();

//connection
server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json());

server.listen(8000,()=>{
    console.log("Listening to the port 8000");
})

//api call for get allemployee details

server.get('/allemployee',(req,res)=>{
    logic.allEmployees().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})