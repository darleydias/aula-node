var jwt  =require("jsonwebtoken")
var { body, validationResult } =require("express-validator")

exports.isAuth= (req,res,next)=>{
    let token = req.headers.auth
    let refresh = req.headers.refresh
    let valido = jwt.verify(token,"yhvh77",(err,encoded)=>{
        if(!err){
            //console.log(refresh)
            console.log(encoded)
            next()
        }else{
            // Crio Token
            //var token = jwt.sign({id:req.body.login},"yhvh77",{expiresIn:'1m'})
            //res.status(200).send({'token':token})
            // Verifica se existe o opaque e se está valido
            // Se estiver gera outro token
            // se não gera outro token e substitui o opaque
        console.log(err)
        return res.status(403).json({msg:'Acesso não permitido'})
        }
    })
}
exports.validacao =
(req,res,next) => {
[
body('login').isEmail(),
body('senha').isLength({ min: 5 })
]
const errors = validationResult(req);
console.log(errors)
    if (!errors.isEmpty()) {
        console.log(errors)
        return res.status(400).json({ errors: errors.array() });
    }else{
        console.log("sem errors")
    }
next()
}