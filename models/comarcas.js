'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comarcas = sequelize.define('Comarcas', {
    codigo: DataTypes.STRING,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {});
  Comarcas.associate = function(models) {
    // associations can be defined here
  };
  return Comarcas;
};