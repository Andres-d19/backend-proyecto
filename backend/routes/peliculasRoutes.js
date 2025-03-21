
const express = require('express');
const router = express.Router();
const peliculasController = require('../controllers/peliculasController');

// Ruta para obtener las películas
router.get('/', peliculasController.getPeliculas);

// Ruta para crear una nueva película
router.post('/peliculas', peliculasController.createPelicula);

// Ruta para actualizar una película
router.put('/peliculas/:id_pelicula', peliculasController.updatePelicula);

// Ruta para eliminar una película
router.delete('/peliculas/:id_pelicula', peliculasController.deletePelicula);

router.get('/disponibles', peliculasController.getPeliculasDisponibles);

router.get('/id/:id_pelicula', peliculasController.getPeliculaPorId);

module.exports = router;
