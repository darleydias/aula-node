const database = require("../models").Comarcas

class ComarcaController{ 
    static async listarComarcas(req,res){
        try {
            const listaComarcas = await database.findAll()
            res.status(200).json(listaComarcas)   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async buscarComarcaById(req,res){
        const {id} =req.params
        try {
            const listaComarcas = await database.findAll({where:{id:Number(id)}})
            res.status(200).json(listaComarcas)   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    
    static async criarComarca(req,res){
        const dadosComarca= req.body
        try {
            const comarca = await database.create(dadosComarca)
            res.status(200).json({comarca})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async atualizarComarca(req,res){
        const {id}= req.params
        const dadosComarca= req.body
        try {
            const comarca = await database.update(dadosComarca,{where:{id:Number(id)}})
            const comarcaAtualizada = await database.findOne({where:{id:Number(id)}})
            res.status(200).json({comarcaAtualizada})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async excluirComarca(req,res){
        const {id}= req.params
        try {
            const comarca = await database.destroy({where:{id:Number(id)}})
            res.status(200).json({"id":id})
        } catch (error) {
            res.status(500).json(error.message) 
        }
    }
        
}
module.exports  = ComarcaController