var express = require('express');
var router = express.Router();
var controller = require('../controllers/OrgaoController');

router.post('/',controller.criarOrgao);
router.get('/',controller.listarOrgaos);
router.get('/:id',controller.buscarOrgaoById);
router.put('/:id',controller.atualizarOrgao);
router.delete('/:id',controller.excluirOrgao);
router.get('/:id/funcoes',controller.listarFuncoes);

module.exports = router;