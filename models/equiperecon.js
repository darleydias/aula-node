'use strict';

module.exports = (sequelize, DataTypes) => {
  const Equiperecon = sequelize.define('Equiperecon', {
    funcao: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER,
    recon_id: DataTypes.INTEGER
  }, {});

  Equiperecon.associate = function(models) {
    
      models.Recon.belongsToMany(models.Usuarios,{
        through:{model:Equiperecon},
        foreignKey:'recon_id',
        constraint:true})
      models.Usuarios.belongsToMany(models.Recon,{
          through:{model:Equiperecon},
          foreignKey:'usuario_id',
          constraint:true
       })
      };
  return Equiperecon;
};