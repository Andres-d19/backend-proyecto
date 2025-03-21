const express = require('express');
const router = express.Router();
const comprasPaquetesController = require('../controllers/compraPaquetesControlles');

// Registrar una compra de paquete
router.post('/compras-paquetes', comprasPaquetesController.registerPurchase);

// Obtener todas las compras de un usuario por su ID
router.get('/compras-paquetes/:id_usuario', comprasPaquetesController.getPurchasesByUser);

module.exports = router;
