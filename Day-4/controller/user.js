const User=require("../mode/user");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const createAccount=async(req,res)=>{
    
    try{
        const {name,email,password}=req.body
        const hashpassword=await bcrypt.hash(password,12);
        const userdata=await User.create({
          name,email,password:hashpassword
        })
        
        res.json({
            message:"Account created successfully",
            userdata
        })
    }
    catch(e){
        res.send(e.message);
    }
}

const login=async (req,res) => {
  try {
    const {email,password}=req.body;
    const userdata = await User.findOne({email});
    const hashpassword=await bcrypt.compare(password,userdata.password);
    
    if(!userdata){
      throw new Error("User is not found");
      
    }

    if(!hashpassword){
      throw new Error("password is invalid");
      
    }
    const token=await jwt.sign(
      {id:userdata._id},
      process.env.secret_key,
      {expiresIn:"42h"}
    )
    res.json({
      message:"welcome to Kle COllege ",
      userdata,
      token:token
    })

  } catch (error) {
    res.send(error.message);
  }
}

module.exports={createAccount,login}