const express = require('express');

const app = express()

app.use("/test",(req,res)=>{
    res.send("hello from server")    
})
app.use("/hello",(req,res)=>{
    res.send("hello")    
})
app.listen(3000,()=>{
    console.log("Server sucessfully running... on PORT 3000");
    
})