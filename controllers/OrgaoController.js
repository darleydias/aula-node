const database = require("../models")

class OrgaoController{ 
    static async listarOrgaos(req,res){
        try {
            const listaOrgao = await database.Orgao.findAll()
            res.status(200).json(listaOrgao)   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async buscarOrgaoById(req,res){
        const {id} =req.params
        try {
            const listaOrgao = await database.Orgao.findAll({where:{id:Number(id)}})
            res.status(200).json(listaOrgao)   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    
    static async criarOrgao(req,res){
        const dadosOrgao= req.body
        try {
            const orgao = await database.Orgao.create(dadosOrgao)
            res.status(200).json({orgao})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async atualizarOrgao(req,res){
        const {id}= req.params
        console.log(id)
        const dadosOrgao= req.body
        try {
            const orgao = await database.Orgao.update(dadosOrgao,{where:{id:Number(id)}})
            const orgaoAtualizado = await database.Orgao.findOne({where:{id:Number(id)}})
            res.status(200).json({orgaoAtualizado})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async excluirOrgao(req,res){
        const {id}= req.params
        try {
            const orgao = await database.Orgao.destroy({where:{id:Number(id)}})
            res.status(200).json({"id":id})
        } catch (error) {
            res.status(500).json(error.message) 
        }
    }      
    static async listarFuncoes(req,res){
        const {id} =req.params
        try {
            const listaOrgao = await database.Orgao.findAll(    
                {
                    where:{id:Number(id)},
                    include:{association:'funcoes'}
                }
            )
            res.status(200).json(listaOrgao)
        }
  
        catch (error) {

            res.status(500).json(error.message) 
        
        }
    }   
}
module.exports  = OrgaoController