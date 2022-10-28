'use strict';

module.exports = (sequelize, DataTypes) => {
  const Alvo = sequelize.define('Alvo', {
    nome: DataTypes.STRING,
    alcunha: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    ufrg: DataTypes.STRING,
    sexo: DataTypes.STRING,
    dtNasc: DataTypes.DATE
  }, {});
  Alvo.associate = function(models) {
    Alvo.hasMany(models.Ponto,{
      foreignKey:'alvo_id',
      as:'pontos'})
  };
  return Alvo;
};