'use strict';

const funcoes = require("./funcoes");

module.exports = (sequelize, DataTypes) => {
  const Orgao = sequelize.define('Orgao', {
    descri: DataTypes.STRING,
    sigla: DataTypes.STRING
  }, {});
    Orgao.associate = function(models) {
      Orgao.hasMany(models.Funcoes,{foreignKey:'orgao_id',as:'funcoes'})
      };
  return Orgao;
};