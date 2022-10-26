const { sequelize } = require("../models")
const database = require("../models")
const { Op } = require('sequelize')

class PontoController{ 
    static async listarPontos(req,res){
        try {
            const listaPontos = await database.Ponto.findAll()
            res.status(200).json(listaPontos)   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async buscarPontoById(req,res){
        const {id} =req.params
        try {
            const listaPontos = await database.Ponto.findAll({where:{id:Number(id)}})
            res.status(200).json(listaPontos)   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    
    static async criarPonto(req,res){
        const dadosPonto= req.body
        try {
            const ponto = await database.Ponto.create(dadosPonto)
            res.status(200).json({ponto})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async atualizarPonto(req,res){
        const {id}= req.params
        const dadosPonto= req.body
        try {
            const ponto = await database.Ponto.update(dadosPonto,{where:{id:Number(id)}})
            const pontoAtualizada = await database.Ponto.findOne({where:{id:Number(id)}})
            res.status(200).json({pontoAtualizada})  
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async excluirPonto(req,res){
        const {id}= req.params
        try {
            const ponto = await database.Ponto.destroy({where:{id:Number(id)}})
            res.status(200).json({"id":id})
        } catch (error) {
            res.status(500).json(error.message) 
        }
    }
        
}
module.exports  = PontoController