// Rutas para crear los usuarios
const express = require('express');
// importar el router de express:
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { check } = require('express-validator');

// crear el usuario
router.post('/',

    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("email", "Agrega un email valido").isEmail(),
        check("password", "El password debe ser minimo de 6 caracteres").isLength({min: 6})
    ],

    usuarioController.crearUsuario
)

module.exports = router;