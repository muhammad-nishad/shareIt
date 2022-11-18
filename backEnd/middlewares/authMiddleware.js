const jwt=require('jsonwebtoken');

const verifyToken=(req,res,next)=>{
    const token =req.body.token || req.headers.token
    console.log(token,'token');
    if(!token){
        return res.status(403).json("A toke is required for Authentication")
    }
    try {
        const decoded=jwt.verify(token,process.env.TOKEN_SECRET)
        req.user=decoded
    } catch (error) {
        res.status(403).json("invalid token")  
    }
    return next()
}

module.exports=verifyToken;
