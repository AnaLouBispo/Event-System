const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('gestaoevento', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;