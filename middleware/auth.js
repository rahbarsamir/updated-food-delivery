const jwt= require("jsonwebtoken")
const register= require("../model/register");


const auth= async(req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        const user=jwt.verify(token,"hellomynameisrahbarsamirandiamadevdevloper");
        // console.log(user);
        
        const username=await register.findOne({_id:user._id});
        req.username=username;
        req.id=user._id
        // console.log(username.name);
        next()
        
    } catch (error) {
        // res.render("login")
        res.redirect("/login")
        
    }
    

}

module.exports=auth;