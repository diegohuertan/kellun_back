const { fileURLToPath } = require('url');
 // Importa la función fileURLToPath para trabajar con import.meta.url
const path = require('path');
const multer = require('multer');
const express = require('express');
const router = express.Router();
const deportistaController = require('../controllers/deportistaController');
const usersController = require('../controllers/usersController');
const socioController = require('../controllers/socioController');

// Obtén la ruta del archivo actual usando import.meta.url y luego conviértela a la ruta del sistema de archivos

const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../imagenes/jugadores'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-portada-" + file.originalname);
    }
});

const fileUpload = multer({
    storage: diskStorage
}).single('foto');

router.get('/deportistas', deportistaController.getAlldeportista);
router.post('/filtrardeportistaRut', deportistaController.filterByrut_deportista);
router.post('/filtrardeportistaOrigen', deportistaController.filterByClub_origen);
router.post('/filtrardeportistaNombre', deportistaController.filterByName);
router.post('/filtrardeportistaCategoria', deportistaController.filterBydeportista_categoria);
router.post('/crearDeportista',fileUpload, deportistaController.createDeportista);
router.get('/usuarios', usersController.getAllusuarios);
router.post('/validarsesion', usersController.validarUser);
router.post('/crearUsuario', usersController.createUser);

// Rutas para Socio
router.get('/socios', socioController.getAllSocios);
router.post('/crearSocio', socioController.createSocio);
router.post('/filtrarSocioRut', socioController.filterByRutSocio);
router.delete('/socio/:rut_socio', socioController.deleteSocioById);

module.exports = router;