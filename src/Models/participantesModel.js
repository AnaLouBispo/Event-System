const {DataTypes} = require('sequelize');
const sequelize = require('../Config/config');
const Evento = require('./eventoModel');

const Participante = sequelize.define('participante', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    eventoId:{
        type: DataTypes.INTEGER,
        references: {
            model: Evento,
            key: 'id',
        }
    }
});

module.exports = Participante;