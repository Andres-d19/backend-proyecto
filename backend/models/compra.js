const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./usuario');
const Paquete = require('./paquete');

const Compra = sequelize.define('Compra', {
    id_compra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id_usuario'
        },
        allowNull: false
    },
    id_paquete: {
        type: DataTypes.INTEGER,
        references: {
            model: Paquete,
            key: 'id_paquete'
        },
        allowNull: false
    },
    fecha_compra: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'compraspaquetes',
    timestamps: false
});

module.exports = Compra;
