'use strict';
const Alvo = require('../models/alvo')
module.exports = (sequelize, DataTypes) => {
  const Ponto = sequelize.define('Ponto', {
    nrPonto: DataTypes.STRING,
    endereco: DataTypes.STRING,
    latLong: DataTypes.STRING,
    descricao: DataTypes.STRING,
    complemento: DataTypes.STRING,
    alvo_id: DataTypes.INTEGER,
    operacao_id: DataTypes.INTEGER
  }, {});
  Ponto.associate = function(models) {
    Ponto.belongsTo(models.Alvo,{
      foreignKey:'alvo_id',
      as:'alvo'
    })
  };
  return Ponto;
};