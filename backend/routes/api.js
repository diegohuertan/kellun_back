const express = require('express');
const router = express.Router();
const deportistaController = require('../controllers/deportistaController')
const usersController = require('../controllers/usersController')


router.get('/deportistas', deportistaController.getAlldeportista);
router.get('/filtrardeportista', deportistaController.filterByrut_deportista)
router.post('/crearDeportista', deportistaController.createDeportista);
router.get('/usuarios', usersController.getAllusuarios );
router.post('/validarsesion', usersController.validarUser);




module.exports = router;