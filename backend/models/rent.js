const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./usuario');
const Pelicula = require('./pelicula');

const Renta = sequelize.define('Renta', {
    id_renta: {
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
    id_pelicula: {
        type: DataTypes.INTEGER,
        references: {
            model: Pelicula,
            key: 'id_pelicula'
        },
        allowNull: false
    },
    fecha_renta: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    fecha_devolucion: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'rentas',
    timestamps: false
});

module.exports = Renta;
