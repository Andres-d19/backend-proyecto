const db = require('../config/db'); 

// Obtener todos los paquetes
const getAllPackages = (req, res) => {
    db.query('SELECT * FROM paquetes', (err, result) => {
        if (err) return res.status(500).json({ message: 'Error de base de datos' });
        res.json(result);
    });
};

// Crear un nuevo paquete
const createPackage = (req, res) => {
    const { nombre, descripcion, precio, fecha_vencimiento } = req.body; // Agregamos fecha_vencimiento
    db.query(
        'INSERT INTO paquetes (nombre, descripcion, precio, fecha_vencimiento) VALUES (?, ?, ?, ?)', 
        [nombre, descripcion, precio, fecha_vencimiento], // Incluimos fecha_vencimiento
        (err, result) => {
            if (err) return res.status(500).json({ message: 'Error al crear el paquete' });
            res.status(201).json({ message: 'Paquete creado con éxito' });
        }
    );
};

// Actualizar un paquete existente
const updatePackage = (req, res) => {
    const { id_paquete } = req.params;
    const { nombre, descripcion, precio, fecha_vencimiento } = req.body; // Agregamos fecha_vencimiento
    db.query(
        'UPDATE paquetes SET nombre = ?, descripcion = ?, precio = ?, fecha_vencimiento = ? WHERE id_paquete = ?', 
        [nombre, descripcion, precio, fecha_vencimiento, id_paquete], // Incluimos fecha_vencimiento
        (err, result) => {
            if (err) return res.status(500).json({ message: 'Error al actualizar el paquete' });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'Paquete no encontrado' });
            res.json({ message: 'Paquete actualizado con éxito' });
        }
    );
};

// Eliminar un paquete
const deletePackage = (req, res) => {
    const { id_paquete } = req.params;
    db.query('DELETE FROM paquetes WHERE id_paquete = ?', [id_paquete], (err, result) => {
        if (err) return res.status(500).json({ message: 'Error al eliminar el paquete' });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Paquete no encontrado' });
        res.json({ message: 'Paquete eliminado con éxito' });
    });
};

module.exports = { getAllPackages, createPackage, updatePackage, deletePackage };
