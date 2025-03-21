// models/index.js

const Usuario = require('./usuario');
const Pelicula = require('./pelicula');
const Paquete = require('./paquete');
const Compra = require('./compra');
const Renta = require('./rent');

// Definir las relaciones

// Relación Usuario - Compra (1:N)
Usuario.hasMany(Compra, { foreignKey: 'id_usuario' });
Compra.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Relación Paquete - Compra (1:N)
Paquete.hasMany(Compra, { foreignKey: 'id_paquete' });
Compra.belongsTo(Paquete, { foreignKey: 'id_paquete' });

// Relación Usuario - Renta (1:N)
Usuario.hasMany(Renta, { foreignKey: 'id_usuario' });
Renta.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Relación Película - Renta (1:N)
Pelicula.hasMany(Renta, { foreignKey: 'id_pelicula' });
Renta.belongsTo(Pelicula, { foreignKey: 'id_pelicula' });

// Exportar todos los modelos para ser utilizados en otras partes de la aplicación
module.exports = {
    Usuario,
    Pelicula,
    Paquete,
    Compra,
    Renta
};
