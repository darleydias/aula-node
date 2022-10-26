
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Equiperecons', [
        {
          funcao: "Coodenador",
          usuario_id:1,
          recon_id: 1,
	        createdAt:new Date(),
	        updatedAt:new Date()
        },
        {
          funcao: "Membro",
          usuario_id:2,
          recon_id: 1,
	        createdAt:new Date(),
	        updatedAt:new Date()
        },
        {
          funcao: "Membro",
          usuario_id:3,
          recon_id: 1,
	        createdAt:new Date(),
	        updatedAt:new Date()
        },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Equiperecons', null, {});
    
  }
};
