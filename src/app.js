const express = require('express');

const app = express()
// order of routes is mandatory!!!
app.get("/test",(req,res)=>{
    res.send("hello from server test")    
})
app.post("/test",(req,res)=>{
    res.send("post success")    
})
//this will match all the http methods in /test 
app.use("/test",(req,res)=>{
    res.send(" use checking")    
})
app.use("/",(req,res)=>{
    res.send("hello from server abc")    
})
app.listen(3000,()=>{
    console.log("Server sucessfully running... on PORT 3000");
    
})