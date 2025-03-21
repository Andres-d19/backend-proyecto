const connection = require('../config/db');

const getPeliculas = (req, res) => {
  connection.query('SELECT * FROM peliculas', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error en la base de datos' });
    res.json(results);
  });
};

const createPelicula = (req, res) => {
  const { titulo, descripcion, anio, director, genero, disponible, url_imagen } = req.body;

  connection.query('INSERT INTO peliculas (titulo, descripcion, anio, director, genero, disponible, url_imagen) VALUES (?, ?, ?, ?, ?, ?, ?)', 
    [titulo, descripcion, anio, director, genero, disponible, url_imagen], 
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Error en la base de datos' });

      // Cambia la respuesta a JSON con un mensaje de éxito
      res.status(201).json({
        mensaje: 'Película creada',
        id_pelicula: results.insertId,  // Opcional, si quieres enviar el ID de la película creada
      });
  });
};

const updatePelicula = (req, res) => {
  const { titulo, descripcion, anio, director, genero, disponible, url_imagen } = req.body;
  const { id_pelicula } = req.params;  // Obtener ID desde la URL

  if (!id_pelicula || !titulo || !descripcion || !anio || !director || !genero || !disponible || !url_imagen) {
    return res.status(400).json({ error: 'Faltan datos necesarios' });
  }

  connection.query(
    'UPDATE peliculas SET titulo = ?, descripcion = ?, anio = ?, director = ?, genero = ?, disponible = ?, url_imagen = ? WHERE id_pelicula = ?',
    [titulo, descripcion, anio, director, genero, disponible, url_imagen, id_pelicula],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Error en la base de datos' });
      if (results.affectedRows === 0) return res.status(404).json({ error: 'Película no encontrada' });

      res.json({ mensaje: 'Película actualizada' });
    }
  );
};

// Método para eliminar una película
const deletePelicula = (req, res) => {
  const { id_pelicula } = req.params;  // El ID de la película se pasa como parámetro

  // Elimina la película de la base de datos
  connection.query('DELETE FROM peliculas WHERE id_pelicula = ?', [id_pelicula], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error en la base de datos' });
    if (results.affectedRows === 0) return res.status(404).json({ error: 'Película no encontrada' });
    res.json({ mensaje: 'Película eliminada' });
  });
};

// Obtener todas las películas que tengan el estado 'disponible' en true
const getPeliculasDisponibles = (req, res) => {
  connection.query('SELECT * FROM peliculas WHERE disponible = true', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error en la base de datos' });
    res.json(results);
  });
};

const getPeliculaPorId = (req, res) => {
  const { id_pelicula } = req.params;  // Debe coincidir con el nombre en la ruta

  connection.query('SELECT * FROM peliculas WHERE id_pelicula = ?', [id_pelicula], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error en la base de datos' });
    if (results.length === 0) return res.status(404).json({ error: 'Película no encontrada' });

    res.json(results[0]);
  });
};


module.exports = {
  getPeliculas,
  createPelicula,
  updatePelicula,
  deletePelicula,
  getPeliculasDisponibles,
  getPeliculaPorId
};