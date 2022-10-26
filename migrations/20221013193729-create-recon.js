'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orientacao: {
        type: Sequelize.STRING
      },
      dataPrev: {
        type: Sequelize.DATE
      },
      dataReal: {
        type: Sequelize.DATE
      },
      infoColetadas: {
        type: Sequelize.STRING
      },
      ponto_id: {
        type: Sequelize.INTEGER
      },
      operacao_id: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      atvDesenvolidasObservadas: {
        type: Sequelize.STRING
      },
      tipoArea: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Recons');
  }
};