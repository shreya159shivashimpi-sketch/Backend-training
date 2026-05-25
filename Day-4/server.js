const express= require("express");
const app=express();
require("dotenv").config()
const port=process.env.port
const mongoose=require("mongoose");

                           
const {createAccount,login}=require("./controller/user");
const { createNotebook } = require("./controller/notes");
const {getNotes, updateNotebook,deleteNotebook}=require("./controller/notes");

                                    
app.use(express.json());
  
                                      
app.post("/signin",createAccount);
app.post("/login", login)
app.post("/CreateNotebook",createNotebook);
app.get("/AllNotes",getNotes)
app.put("/update/:id",updateNotebook);
app.delete("/api/delete/:id",deleteNotebook);



mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("Database is connected")
app.listen(port,()=>{
    console.log(`server is running port number ${port}`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
})                                                                                               
})
.catch((e)=>{
    console.log("something went wrong",e);
})