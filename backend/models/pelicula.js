const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Pelicula = sequelize.define('Pelicula', {
    id_pelicula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    anio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    director: {
        type: DataTypes.STRING,
        allowNull: true
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: true
    },
    disponible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    url_imagen: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'peliculas',
    timestamps: false
});

module.exports = Pelicula;
