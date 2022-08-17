var jwt  =require("jsonwebtoken")
exports.isAuth= (req,res,next)=>{
    let token = req.headers.auth
    let valido = jwt.verify(token,"yhvh77",(err,encoded)=>{
        if(!err){
            console.log(encoded)
            next()
        }else{
        console.log(err)
        return res.status(403).json({msg:'Acesso não permitido'})
        }
    })

}