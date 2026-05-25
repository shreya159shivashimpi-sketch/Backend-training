const mongoose=require("mongoose");
const nodeschema=new mongoose.Schema({
    heading:{
        type:String,
        required:true,
        uppercase:true
    },
    content:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("nodes",nodeschema);