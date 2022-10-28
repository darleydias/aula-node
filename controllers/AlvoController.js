const database = require("../models")

class AlvoController{

    static async listarAlvos(req,res){
        try {
            const listaAlvos = await database.Alvo.findAll()
            res.status(200).json(listaAlvos)   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async buscarAlvoById(req,res){
        const {id}= req.params
        try {
            // const alvo = await database.Alvos.findOne({where:{codigo:Number(codigo)}})
            const alvo = await database.Alvo.findOne({where:{id:Number(id)}})
            res.status(200).json(alvo)  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async criarAlvo(req,res){
        const dadosAlvo= req.body
        try {
            const alvo = await database.Alvo.create(dadosAlvo)
            res.status(200).json({alvo})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async atualizarAlvo(req,res){
        const {id}= req.params
        const dadosAlvo= req.body
        try {
            const alvo = await database.Alvo.update(dadosAlvo,{where:{id:Number(id)}})
            const alvoAtualizado = await database.Alvos.findOne({where:{id:Number(id)}})
            res.status(200).json({alvoAtualizado})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async excluirAlvo(req,res){
        const {id}= req.params
        try {
            const alvo = await database.Alvo.destroy({where:{id:Number(id)}})
            res.status(200).json({"id":id})
        } catch (error) {
            res.status(500).json(error.message) 
        }
    }
}
module.exports  = AlvoController