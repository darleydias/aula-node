'use strict';
module.exports = (sequelize, DataTypes) => {
  const Funcoes = sequelize.define('Funcoes', {
    descri: DataTypes.STRING,
    orgao_id: DataTypes.INTEGER
  }, {});
  Funcoes.associate = function(models) {
    Funcoes.belongsTo(models.Orgao,{foreignKey:'orgao_id',as:'funcao'})
  };
  return Funcoes;
};