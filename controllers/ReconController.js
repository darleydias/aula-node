const { sequelize } = require("../models")
const database = require("../models")
const { Op } = require('sequelize')

class ReconController{ 
    static async listarRecons(req,res){
        try {
            const listaRecons = await database.Recon.findAll()
            res.status(200).json(listaRecons)   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async buscarReconById(req,res){
        const {id} =req.params
        try {
            const listaRecons = await database.Recon.findAll({where:{id:Number(id)}})
            res.status(200).json(listaRecons)   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async criarRecon(req,res){
        const dadosRecon= req.body
        try {
            const recon = await database.Recon.create(dadosRecon)
            res.status(200).json({recon})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async atualizarRecon(req,res){
        const {id}= req.params
        const dadosRecon= req.body
        try {
            const recon = await database.Recon.update(dadosRecon,{where:{id:Number(id)}})
            const reconAtualizado = await database.Recon.findOne({where:{id:Number(id)}})
            res.status(200).json({reconAtualizado})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async excluirRecon(req,res){
        const {id}= req.params
        try {
            const recon = await database.Recon.destroy({where:{id:Number(id)}})
            res.status(200).json({"id":id})
        } catch (error) {
            res.status(500).json(error.message) 
        }
    }      
    static async criaEquipeRecon(req,res){
        //recebo id de um recon e trago o objeto busco o objeto
        // recebo id da pessoa, busco e coloco dentri
        const idRecon = req.body.idRecon
        const idPessoa = req.body.idPessoa

        try {
            const recon = await database.Recon.findOne({where:{id:Number(idRecon)}})
            const usuario = await database.Usuarios.findOne({where:{id:Number(idPessoa)}})
            await recon.addUsuarios([usuario])
            res.status(200).json({"msg":`Membro de equipe de ${usuario.nome} cadastrado`})
        } catch (error) {
            res.status(500).json(error.message) 
        }
    }      
    static async pesquisaEquipe(req,res){
        const {idRecon} =req.params
        // console.log(idRecon)
        try {
            const listaRecons = await database.Recon.findAll({
                include:[
                    {
                        model:database.Usuarios,
                        as: 'Usuarios',
                        through:{attributes:[]}
                    }
                ],
            })
            res.status(200).json(listaRecons)   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }        
    static async pesquisaReconsPessoa(req,res){
        const {idPessoa} =req.params
        try {
            const listaRecons = await database.Usuarios.findOne({
                attributes:['login','nome'],
                where:{id:Number(idPessoa)},
                // where:{
                //     nome:{[Op.like]:'De%'}
                //     },
                include:[
                    {
                        model:database.Recon,
                        as: 'Recons',
                        through:{attributes:[]}
                    }
                ],
            })
            res.status(200).json(listaRecons)   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }        
}
module.exports  = ReconController