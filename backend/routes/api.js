const express = require('express');
const router = express.Router();
const deportistaController = require('../controllers/deportistaController');
const usersController = require('../controllers/usersController');
const socioController = require('../controllers/socioController');

router.get('/deportistas', deportistaController.getAlldeportista);
router.post('/filtrardeportistaRut', deportistaController.filterByrut_deportista);
router.post('/filtrardeportistaOrigen', deportistaController.filterByClub_origen);
router.post('/filtrardeportistaNombre', deportistaController.filterByName);
router.post('/filtrardeportistaCategoria', deportistaController.filterBydeportista_categoria);
router.post('/crearDeportista', deportistaController.createDeportista);
router.get('/usuarios', usersController.getAllusuarios);
router.post('/validarsesion', usersController.validarUser);
router.post('/crearUsuario', usersController.createUser);

// Rutas para Socio
router.get('/socios', socioController.getAllSocios);
router.post('/crearSocio', socioController.createSocio);
router.post('/filtrarSocioRut', socioController.filterByRutSocio);
router.delete('/socio/:rut_socio', socioController.deleteSocioById);

module.exports = router;