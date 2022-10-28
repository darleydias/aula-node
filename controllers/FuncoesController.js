const database = require("../models")

class FuncaoController{ 
    static async listarFuncoes(req,res){
        try {
            const listaFuncao = await database.Funcoes.findAll()
            res.status(200).json(listaFuncao)   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async buscarFuncaoById(req,res){
        const {id} =req.params
        try {
            const listaFuncao = await database.Funcoes.findAll({where:{id:Number(id)}})
            res.status(200).json(listaFuncao)   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    
    static async criarFuncao(req,res){
        const dadosFuncao= req.body
        try {
            const funcao = await database.Funcoes.create(dadosFuncao)
            res.status(200).json({funcao})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async atualizarFuncao(req,res){
        const {id}= req.params
        console.log(id)
        const dadosFuncao= req.body
        try {
            const funcao = await database.Funcoes.update(dadosFuncao,{where:{id:Number(id)}})
            const funcaoAtualizado = await database.Funcoes.findOne({where:{id:Number(id)}})
            res.status(200).json({funcaoAtualizado})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async excluirFuncao(req,res){
        const {id}= req.params
        try {
            const funcao = await database.Funcoes.destroy({where:{id:Number(id)}})
            res.status(200).json({"id":id})
        } catch (error) {
            res.status(500).json(error.message) 
        }
    }      
 
}
module.exports  = FuncaoController