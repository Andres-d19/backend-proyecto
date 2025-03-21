const db = require('../config/db');

const rentMovie = (req, res) => {
    const { id_usuario, id_pelicula } = req.body;
    const fecha_devolucion = new Date();
    fecha_devolucion.setDate(fecha_devolucion.getDate() + 7); // 7 días de alquiler

    db.query('INSERT INTO rentas (id_usuario, id_pelicula, fecha_devolucion) VALUES (?, ?, ?)', [id_usuario, id_pelicula, fecha_devolucion], (err, result) => {
        if (err) return res.status(500).json({ message: 'Error de base de datos' });
        res.status(201).json({ message: 'Película alquilada con éxito' });
    });
};

// Otros métodos como devolver película, ver estado de membresía...

module.exports = { rentMovie };
