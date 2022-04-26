var express = require('express');
const async = require('hbs/lib/async');
var router = express.Router();


var Usuario = require('../models').usuario;

/* Ruta Raiz */
router.get('/', function(req, res, next) {
    Usuario.findAll({}).then(function(usuariosRespuesta) {
        res.render('login', { usuario: usuariosRespuesta });
    });
});

/* Control Usuario */
router.post('/ingresoUser', async function(req, res, next) {
    usr = req.body.usuario;
    pss = req.body.password;
    const exist = await Usuario.findOne({ where: { usuario: usr }, where :  { password: pss }})
    if(exist === null){
        res.redirect('/?val=1');
    }else{
        res.redirect('/control/listado');
    }
});


module.exports = router;