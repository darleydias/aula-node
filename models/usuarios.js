

'use strict';

const Equiperecon = require('./equiperecon')
// const Recons = require('./recon')

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
      
    //   Usuarios.belongsToMany(models.Recon,{
    //     through:{
    //       model:Equiperecon
    //     },
    //     foreignKey:'usuario_id',
    //     constraints:true
    // })
   
    //    Usuarios.hasMany(Equiperecon,{foreignKey:'usuario_id'})
    //    Equiperecon.belongsTo(Usuarios,{foreignKey:'usuario_id'})
    
    }
    return Usuarios;
  };  
  
  















