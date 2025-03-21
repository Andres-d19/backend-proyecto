const connection = require('../config/db');

const getUsers = (req, res) => {
  console.log('getUsers called');
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Error en la base de datos:', err);
      return res.status(500).send('Error en la base de datos');
    }
    console.log('Results:', results);
    res.json(results);
  });
};

const updateUser = (req, res) => {
  const { id_usuario } = req.params;
  const { nombre, email, rol } = req.body;
  console.log(`updateUser called with id_usuario: ${id_usuario}, nombre: ${nombre}, email: ${email}, rol: ${rol}`);

  connection.query('UPDATE usuarios SET nombre = ?, email = ?, rol = ? WHERE id_usuario = ?', [nombre, email, rol, id_usuario], (err, results) => {
    if (err) {
      console.error('Error en la base de datos:', err);
      return res.status(500).send('Error en la base de datos');
    }
    console.log('User updated:', results);
    res.json({ mensaje: "Usuario actualizado" });
  });
};

const deleteUser = (req, res) => {
  const { id_usuario } = req.params;
  console.log(`deleteUser called with id_usuario: ${id_usuario}`);

  connection.query('DELETE FROM usuarios WHERE id_usuario = ?', [id_usuario], (err, results) => {
    if (err) {
      console.error('Error en la base de datos:', err);
      return res.status(500).send('Error en la base de datos');
    }
    console.log('User deleted:', results);
    res.json({ success: true, message: "Usuario eliminado correctamente" });
  });
};


const createUser = (req, res) => {
  const { nombre, email, password, rol } = req.body;
  console.log(`createUser called with nombre: ${nombre}, email: ${email}, password: ${password}, rol: ${rol}`);

  // Asegúrate de que todos los campos sean proporcionados
  if (!nombre || !email || !password || !rol) {
    return res.status(400).json({ mensaje: "Faltan campos requeridos" });
  }

  // Puedes agregar más validaciones aquí, como la verificación de un formato de email válido, etc.

  // Inserta el nuevo usuario en la base de datos
  connection.query('INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)', [nombre, email, password, rol], (err, results) => {
    if (err) {
      console.error('Error en la base de datos:', err);
      return res.status(500).send('Error en la base de datos');
    }
    console.log('User created:', results);
    res.status(201).json({ mensaje: "Usuario creado exitosamente" });
  });
};

module.exports = { getUsers, updateUser, deleteUser, createUser };

