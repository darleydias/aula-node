var express = require('express');
var router = express.Router();
var controller = require('../controllers/ComarcaController');

// Posso colocar só '/' aoinves de '/comarca' porque isso está setado em app.js no use

router.post('/',controller.criarComarca);
router.get('/',controller.listarComarcas);
// router.get('/:codigo',controller.buscarComarcaByCod);
router.get('/:id',controller.buscarComarcaById);
router.put('/:id',controller.atualizarComarca);
router.delete('/:id',controller.excluirComarca);

module.exports = router;