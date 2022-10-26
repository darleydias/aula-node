
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Recons', [
        {
          orientacao:"Identificar veículos e horários..",
          dataPrev: new Date(),
          dataReal: new Date(),
          infoColetadas:"Nol ocal deparamos com o alvo",
          ponto_id: 1,
          status: "Executado",
          atvDesenvolidasObservadas: "o Alvo chga ás 10:00",
          tipoArea: "Urbano",
	        createdAt:new Date(),
	        updatedAt:new Date()
        },
        {
          orientacao:"Levantar movimentos ",
          dataPrev: new Date(),
          dataReal: new Date(),
          infoColetadas:"Verificou-se que o Alvo...",
          ponto_id: 1,
          status: "Planejado",
          atvDesenvolidasObservadas: "Todos os dias às 17:40 um veículo...",
          tipoArea: "Urbano",
	        createdAt:new Date(),
	        updatedAt:new Date()
        },
        {
          orientacao:"Conferir se há pessoas com computadores entrando...",
          dataPrev: new Date(),
          dataReal: new Date(),
          infoColetadas:"09 pessoas saŕam da casa...",
          ponto_id: 1,
          status: "Planejado",
          atvDesenvolidasObservadas: "o Alvo chega ás 22:00 de carro ...",
          tipoArea: "Urbano",
	        createdAt:new Date(),
	        updatedAt:new Date()
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recons', null, {});
    
  }
};
