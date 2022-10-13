const database = require("../models")

class UsuariosController{
    static async listarUsuarios(req,res){
        try {
            const listaUsuarios = await database.Usuarios.findAll()
            res.status(200).json({listaUsuarios})   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async buscarUsuarioById(req,res){
        const {id}= req.params
        try {
            // const usuario = await database.Usuarios.findOne({where:{codigo:Number(codigo)}})
            const usuario = await database.Usuarios.findOne({where:{id:Number(id)}})
            res.status(200).json({usuario})  
              
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async criarUsuario(req,res){
        const dadosUsuario= req.body
        try {
            const usuario = await database.Usuarios.create(dadosUsuario)
            res.status(200).json({usuario})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async atualizarUsuario(req,res){
        const {id}= req.params
        const dadosUsuario= req.body
        try {
            const usuario = await database.Usuarios.update(dadosUsuario,{where:{id:Number(id)}})
            const usuarioAtualizada = await database.Usuarios.findOne({where:{id:Number(id)}})
            res.status(200).json({usuarioAtualizada})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async excluirUsuario(req,res){
        const {id}= req.params
        try {
            const usuario = await database.Usuarios.destroy({where:{id:Number(id)}})
            res.status(200).json({"id":id})
        } catch (error) {
            res.status(500).json(error.message) 
        }
    }
    static async findIdLoggedUserByToken(refresh){
        try {
            const usuario = await database.Usuarios.findOne({where:{token:refresh}})
            return usuario.id
        } catch (error) {
            return error
        }
    }
    static async isValidRefresh(refresh){
        try {
            const usuario = await database.Usuarios.findOne({where:{token:refresh}})
            if(usuario.token!=''){
                //console.log({'nome':usuario.expireIn})
                let dataAtual = new Date()
                dataAtual = dataAtual.setHours(dataAtual.getHours()-3)
                let expireIn =usuario.expireIn.getTime()
                if(dataAtual > expireIn){
                    console.log("logar")
                    return false
                }else{
                    console.log("trocar token")
                    return true
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    }
        
        
}
module.exports  = UsuariosController