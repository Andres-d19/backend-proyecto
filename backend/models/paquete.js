const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Paquete = sequelize.define('Paquete', {
    id_paquete: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'paquetes',
    timestamps: false
});

module.exports = Paquete;
