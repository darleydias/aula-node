
var express = require('express');
var router = express.Router();
var controller = require("../controllers/loginController")

router.post('/',controller.login);
router.post('/renew',controller.login);

module.exports = router;