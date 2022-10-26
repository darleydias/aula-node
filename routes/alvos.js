var express = require('express');
var router = express.Router();
var controller = require('../controllers/AlvoController');

router.post('/',controller.criarAlvo);
router.get('/',controller.listarAlvos);
// router.get('/:refresh',controller.isValidRefresh);
router.get('/:id',controller.buscarAlvoById);
router.put('/:id',controller.atualizarAlvo);
router.delete('/:id',controller.excluirAlvo);

module.exports = router;