const jwt= require("jsonwebtoken")
const admin= require("../model/admins");


const auth2= async(req,res,next)=>{
    try {
        const token=req.cookies.adminToken;
        const user=jwt.verify(token,"hellomynameisrahbarsamirandiamadevdevloperadmin");
        // console.log("sss");
        
        const username=await admin.findOne({_id:user._id});
        req.username=username;
        req.id=user._id
        // console.log(username.name);
        next()
        
    } catch (error) {
        // res.render("login")
        // res.send(error)
        // console.log("a")
        res.redirect("/login")
        
    }
    

}

module.exports=auth2;