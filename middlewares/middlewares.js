var jwt  =require("jsonwebtoken")
var { body, validationResult } =require("express-validator")
const UsuariosController = require("../controllers/UsuariosController")

exports.isAuth= (req,res,next)=>{
    
    let token = req.headers.auth
    let refresh = req.headers.refresh

    let valido = jwt.verify(token,"yhvh77",(err,encoded)=>{
        if(!err){
            console.log(encoded)
            next()
        }else{
            // se retornar true = Trocal token ; false = enviar msg pra login
            if(UsuariosController.isValidRefresh(refresh)){// refresh ainda está válido
                const usuario =UsuariosController.findIdLoggedUserByToken(refresh)
                var token = jwt.sign({id:usuario.login},"yhvh77",{expiresIn:'1m'})
                res.status(203).json({token:token,refresh:refresh})
             }else{
                console.log(err)
                res.status(403).json({msg:'Acesso não permitido'})
            }
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