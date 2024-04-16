
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Satellite = sequelize.define('Satellite', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    orbitalPath: {
        type: DataTypes.STRING,
        allowNull: false
    },
    altitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    velocity: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    launchDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    manufacturer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isOperational: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    // Add more fields as needed
});

module.exports = Satellite;
