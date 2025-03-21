const connection = require('../config/db');


const registerPurchase = (req, res) => {
  const { id_usuario, id_paquete, estado, fecha_vencimiento } = req.body;
  const fecha_compra = new Date().toISOString().slice(0, 19).replace('T', ' '); // Formato 'YYYY-MM-DD HH:MM:SS'

  console.log(`registerPurchase called with id_usuario: ${id_usuario}, id_paquete: ${id_paquete}, estado: ${estado}, fecha_vencimiento: ${fecha_vencimiento}`);

  if (!id_usuario || !id_paquete || estado === undefined || !fecha_vencimiento) {
    return res.status(400).json({ mensaje: "Faltan campos requeridos" });
  }

  const query = 'INSERT INTO compraspaquetes (id_usuario, id_paquete, fecha_compra, estado, fecha_vencimiento) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [id_usuario, id_paquete, fecha_compra, estado, fecha_vencimiento], (err, results) => {
    if (err) {
      console.error('Error en la base de datos:', err);
      return res.status(500).send('Error en la base de datos');
    }
    console.log('Purchase registered:', results);
    res.status(201).json({ mensaje: "Compra registrada exitosamente" });
  });
};

module.exports = { registerPurchase };


const getPurchasesByUser = (req, res) => {
    const { id_usuario } = req.params;
    console.log(`getPurchasesByUser called with id_usuario: ${id_usuario}`);
  
    if (!id_usuario) {
      return res.status(400).json({ mensaje: "El ID de usuario es requerido" });
    }
  
    const query = `
      SELECT cp.id_compra, cp.id_usuario, cp.id_paquete, p.nombre AS nombre_paquete, 
             cp.fecha_compra, cp.estado, cp.fecha_vencimiento
      FROM compraspaquetes cp
      JOIN paquetes p ON cp.id_paquete = p.id_paquete
      WHERE cp.id_usuario = ?`;
  
    connection.query(query, [id_usuario], (err, results) => {
      if (err) {
        console.error('Error en la base de datos:', err);
        return res.status(500).send('Error en la base de datos');
      }
      console.log('Purchases found:', results);
      res.json(results);
    });
  };
  
  module.exports = { registerPurchase, getPurchasesByUser };
  

module.exports = { registerPurchase, getPurchasesByUser };
