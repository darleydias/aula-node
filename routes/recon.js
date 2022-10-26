var express = require('express');
var router = express.Router();
var controller = require('../controllers/ReconController');

// Posso colocar só '/' ao inves de '/Recon' porque isso está setado em app.js no use

router.post('/',controller.criarRecon);
router.get('/',controller.listarRecons);
router.get('/:id',controller.buscarReconById);
router.post('/equipe',controller.criaEquipeRecon);
router.get('/:idRecon/equipe',controller.pesquisaEquipe);
router.get('/:idPessoa/recons',controller.pesquisaReconsPessoa);
router.put('/:id',controller.atualizarRecon);
router.delete('/:id',controller.excluirRecon);

module.exports = router;    