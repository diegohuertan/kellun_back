const express = require('express');
const router = express.Router();
const deportistaController = require('../controllers/deportistaController')
const usersController = require('../controllers/usersController')


router.get('/deportistas', deportistaController.getAlldeportista);
router.get('/filtrardeportistaRut', deportistaController.filterByrut_deportista)
router.get('/filtrardeportistaOrigen', deportistaController.filterByClub_origen)
router.get('/filtrardeportistaNombre', deportistaController.filterByName)
router.get('/filtrardeportistaCategoria', deportistaController.filterBydeportista_categoria)
router.post('/crearDeportista', deportistaController.createDeportista);
router.get('/usuarios', usersController.getAllusuarios );
router.post('/validarsesion', usersController.validarUser);
router.post('/crearUsuario', usersController.createUser);





module.exports = router;