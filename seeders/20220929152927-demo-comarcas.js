'use strict';

module.exports = {
 
async up (queryInterface, Sequelize) {

  await queryInterface.bulkInsert('Comarcas', [{
    codigo:"bh",
    nome: 'Belo Horizonte',
    descricao:"Comarca especial",
    createdAt:new Date(),
    updatedAt:new Date()
  }, 
  {
    codigo:"SB",
    nome: 'Sabará',
    descricao:"Ordinária",
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    codigo:"BT",
    nome: 'Betim',
    descricao:"Comarca especial",
    createdAt:new Date(),
    updatedAt:new Date()
  }

],{});
},

async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Comarcas', null, {});
  
}

};
