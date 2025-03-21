const express = require('express');
const router = express.Router();
const paquetesController = require('../controllers/paquetesController');

// Obtener todos los paquetes
router.get('/paquetes', paquetesController.getAllPackages);

// Crear un paquete nuevo
router.post('/paquetes', paquetesController.createPackage);

// Actualizar un paquete
router.put('/paquetes/:id_paquete', paquetesController.updatePackage);

// Eliminar un paquete
router.delete('/paquetes/:id_paquete', paquetesController.deletePackage);

module.exports = router;
