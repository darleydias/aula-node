'use strict';

const Equiperecon = require('../models/equiperecon')
// const Usuarios=require('../models/usuarios')


module.exports = (sequelize, DataTypes) => {

  const Recon = sequelize.define('Recon', {
    orientacao: DataTypes.STRING,
    dataPrev: DataTypes.DATE,
    dataReal: DataTypes.DATE,
    infoColetadas: DataTypes.STRING,
    ponto_id: DataTypes.INTEGER,
    operacao_id:DataTypes.INTEGER,
    status: DataTypes.STRING,
    atvDesenvolidasObservadas: DataTypes.STRING,
    tipoArea: DataTypes.STRING
  }, {});
  
  Recon.associate = function(models) {
    // Recon.belongsToMany(models.Usuarios,{
    //   through:{model:Equiperecon},
    //   foreignKey:'recon_id',
    //   constraints:true})
  
    // Recon.hasMany(Equiperecon,{foreignKey:'recon_id'})
    // Equiperecon.belongsTo(Usuarios,{foreignKey:'recon_id'})
  };
  return Recon;
};