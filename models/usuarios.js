'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    codigo: DataTypes.STRING,
    nome: DataTypes.STRING,
    login: DataTypes.STRING,
    senha: DataTypes.STRING,
    img: DataTypes.STRING,
    funcao: DataTypes.STRING,
    setor: DataTypes.STRING,
    email: DataTypes.STRING,
    token: DataTypes.STRING,
    expireIn: DataTypes.DATE
  }, {});
  Usuarios.associate = function(models) {
    // associations can be defined here
  };
  return Usuarios;
};