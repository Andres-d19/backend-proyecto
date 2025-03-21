const express = require('express');
const { getUsers, updateUser, deleteUser, createUser } = require('../controllers/usuariosController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/usuarios', getUsers);

// Ruta para actualizar un usuario por ID
router.put('/usuarios/:id_usuario', updateUser);

// Ruta para eliminar un usuario por ID
router.delete('/usuarios/:id_usuario', deleteUser);

// Nueva ruta para crear un usuario
router.post('/usuarios', createUser);

module.exports = router;
