var express = require('express');
var router = express.Router();
var controller = require('../controllers/PontoControler')

router.post('/',controller.criarPonto);
router.get('/',controller.listarPontos);
router.get('/:id',controller.buscarPontoById);
router.put('/:id',controller.atualizarPonto);
router.delete('/:id',controller.excluirPonto);

module.exports = router;