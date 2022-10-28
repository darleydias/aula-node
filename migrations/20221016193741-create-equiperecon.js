'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Equiperecons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      funcao: {
        type: Sequelize.STRING
      },
      usuario_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{model:'Usuarios',key:'id'},
        onDelete:'CASCADE'
      },
      recon_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'Recons',
          key:'id'
        },
        onDelete:'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Equiperecons');
  }
};