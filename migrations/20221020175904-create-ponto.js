'use strict';

const alvo = require("../models/alvo");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pontos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nrPonto: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      latLong: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      alvo_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'Alvos',
          key:'id'
        },
        onDelete:'CASCADE'
      },
      operacao_id: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Pontos');
  }
};