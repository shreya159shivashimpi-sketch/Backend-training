const mongoose=require("mongoose");
const validator=require("validator");
const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");

            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("password is weak");

            }
        }
    }
})

module.exports=mongoose.model("User",userSchema);