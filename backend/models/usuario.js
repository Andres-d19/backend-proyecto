const connection = require('../config/db');

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM usuarios', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Otros métodos de usuario...

module.exports = { getAllUsers };
