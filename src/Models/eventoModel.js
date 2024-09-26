const { DataTypes } = require('sequelize');
const sequelize = require('../Config/config');

const Evento = sequelize.define('evento', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    localizacao: {
       type: DataTypes.STRING,
       allowNull: false
    }
    
});


module.exports = Evento;