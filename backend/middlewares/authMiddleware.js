const jwt = require('jwt-simple');
const secret = 'mi_clave_secreta'; // Cambia esta clave

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Acceso denegado');

  try {
    const decoded = jwt.decode(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send('Token no válido');
  }
};

module.exports = authMiddleware;
