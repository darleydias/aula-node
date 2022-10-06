var express = require('express');
var router = express.Router();
var controller = require('../controllers/UsuariosController');

// Posso colocar só '/' aoinves de '/usuarios' porque isso está setado em app.js no use

router.post('/',controller.criarUsuario);
router.get('/',controller.listarUsuarios);
router.get('/:token',controller.findLoggedUserByToken);
router.get('/:id',controller.buscarUsuarioById);
router.put('/:id',controller.atualizarUsuario);
router.delete('/:id',controller.excluirUsuario);

module.exports = router;