var express = require('express');
var router = express.Router();

var Usuario = require('../models').usuario;

/* GET home page. */

router.get('/listado', function (req, res, next) {
    Usuario.findAll({}).then(function (usuariosRespuesta) {
        res.render('listado', { usuario: usuariosRespuesta });
    });
});

/* POST home page. */
router.post('/listado', function (req, res, next) {
    Usuario.findAll({}).then(function (usuariosRespuesta) {
        res.render('listado', { usuario: usuariosRespuesta });
    });
});

/* Ruta Raiz */
router.get('/', function (req, res, next) {
    res.render('login', { title: 'Evaluacion 03' });
});

/* Logout */
router.get('/logout', function (req, res, next) {
    res.render('login', { title: 'Evaluacion 03' });
});

/* Registrar */
router.get('/registrarUsuario', function (req, res, next) {
    res.render('registro');
});



/* Logica de Negocio (CRUD) */
//Guardar Registro
router.post('/guardarUsuario', function (req, res, next) {
    usuario = req['body']['usuario'];
    correo = req['body']['email'];
    password = req['body']['password'];
    Usuario.create({
        usuario: usuario,
        correo: correo,
        password: password
    }).then(function (producto) {
        res.redirect('/control/listado/?val=4');
    });
});



//Eliminar
router.get('/eliminarUsuario/:id', function (req, res, next) {
    id = req.params.id;
    Usuario.findByPk(id).then((usuario) => {
        return usuario.destroy();
    }).then(function () {
        res.redirect('/control/listado');
    });
});

//Modificar
router.get('/modificarUsuario/:id', function (req, res, next) {
    console.log(req['params']['id']);
    id = req['params']['id'];
    Usuario.findByPk(id).then(function (usuarioRespuesta) {
        res.render('modificar', { usuario: usuarioRespuesta });
    });
});

router.post('/actualizarUsuario', function (req, res, next) {
    id = req['body']['id'];
    usuario = req['body']['usuario'];
    correo = req['body']['email'];
    password = req['body']['password'];
    Usuario.findByPk(id).then(function (usr) {
        usr.usuario = usuario,
            usr.correo = correo,
            usr.password = password
        usr.save();
    }).then(() => {
        res.redirect('/control/listado/?val=3');
    });
});

module.exports = router;
