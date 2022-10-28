var jwt  =require("jsonwebtoken")
var zeroFill = require('zero-fill')
const database = require("../models")
const cripto = require("crypto") 
const moment = require("moment")
// const Usuario = require("../models/usuarios")
exports.login = async (req,res)=>{
//  #swagger.tags = ['Login']
//  #swagger.description = "Página de Login" 
    const login = req.body.login
    var usuarioLogado = await database.Usuarios.findOne({where:{login:login}})
    if(usuarioLogado!=null){
        if(req.body.senha==usuarioLogado.senha){
            // Crio Token
            var token = jwt.sign({id:req.body.login},"yhvh77",{expiresIn:'20m'})
            //Crio refresh
            const refresh = cripto.randomBytes(24).toString('hex');
            //defini data expiração
            const dataAtual = new Date()
            dataAtual.setHours(dataAtual.getHours()-3)
            // dataExpiracao =dataAtual.setMonth(dataAtual.getMonth()+1)
            const minutos = dataAtual.getMinutes()+2
            const dataExpiracao = dataAtual.setMinutes(minutos)
            
            //preencho dado pra gravar e gravo
            let data = {'token':refresh,'expireIn':dataExpiracao}
            
            await database.Usuarios.update(data,{where:{id:usuarioLogado.id}})
           
            res.status(200).send({'token':token,'refreshToken':refresh,'funcao':usuarioLogado.funcao,'email':usuarioLogado.email,'setor':usuarioLogado.setor})

        }else{
            res.status(403).send({error:"Senha Inválida"})
        }
    }else{
        res.status(404).send({error:"Usuário nao existente"})
    }


}