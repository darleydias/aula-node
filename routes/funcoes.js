var express = require('express');
var router = express.Router();
var controller = require('../controllers/FuncoesController')

router.post('/',controller.criarFuncao);
router.get('/',controller.listarFuncoes);
router.get('/:id',controller.buscarFuncaoById);
router.put('/:id',controller.atualizarFuncao);
router.delete('/:id',controller.excluirFuncao);

module.exports = router;