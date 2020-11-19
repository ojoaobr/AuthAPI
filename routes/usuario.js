const usuarioController = require ('../controller/usuarioController')
const express = require ('express')
const router = express.Router()

router.get('/me', usuarioController.me)
router.post('/login', usuarioController.login)
router.post('/criar-usuario', usuarioController.criarUsuario)

module.exports = routers
