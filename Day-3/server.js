const express= require("express");
const app=express();
const mongoose = require("mongoose");
require("dotenv").config();
const port= process.env.port

app.use(express.json());


mongoose.connect("mongodb+srv://shreya159shivashimpi_db_user:shreya12345@cloud.6yjztji.mongodb.net/?appName=Cloud")
.then(()=>{
    console.log("mongodb is connected");
    app.listen(port,()=>(
    console.log(`server is running port number $(port)`)
));
})
.catch((e)=>{
    console.log("something went wrong",e);
});


