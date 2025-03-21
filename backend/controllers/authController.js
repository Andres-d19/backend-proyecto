const jwt = require('jwt-simple');
const connection = require('../config/db');

const secret = 'mi_clave_secreta'; // Cambia esta clave secreta

const login = (req, res) => {
  const { email, password } = req.body;
  console.log('Request Body:', req.body);  // Muestra el cuerpo de la solicitud

  connection.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.log('Error en la consulta a la base de datos:', err);  // Muestra el error de la base de datos
      return res.status(500).send('Error en la base de datos');
    }
    
    console.log('Resultados de la base de datos:', results);  // Muestra los resultados de la consulta
    
    if (results.length === 0) {
      console.log('Usuario no encontrado');  // Muestra cuando no se encuentra el usuario
      return res.status(400).send('Usuario no encontrado');
    }
    
    const user = results[0];
    console.log('Usuario encontrado:', user);  // Muestra el usuario encontrado
    
    // Compara la contraseña en texto plano
    if (password !== user.password) {
      console.log('Contraseña incorrecta');  // Muestra cuando la contraseña no es correcta
      return res.status(400).send('Contraseña incorrecta');
    }
    
    const payload = { id_usuario: user.id_usuario, rol: user.rol };
    console.log('Payload del token:', payload);  // Muestra el payload del token
    const token = jwt.encode(payload, secret);
    console.log('Token generado:', token);  // Muestra el token generado
    res.json({ token });
  });
};

module.exports = { login };
