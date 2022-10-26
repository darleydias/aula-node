

'use strict';

module.exports = {
 
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pontos', [{
    nrPonto:"1",
    endereco: "Rua Cordisburgo, 23 Bairro Santa Inês - Bhte MG",
    latLong: "-21.8908908098989,-23,080980989089",
    descricao:"Casa do Alvo",
    complemento: "Residência normalmente utilizada para reuniçõpes com a contabilidades",
    alvo_id: 1,
    operacao_id: 1
  }, 
  {
    nrPonto:"2",
    endereco: "Rua Alcebíades, 345 Apto 1132 Bairro Carmópolis Bhte MG",
    latLong: "-21.8908445432658989,-23,0809803245241589",
    descricao:"Escritório do Alvo",
    complemento: "Local de reunião dos foirnecedorees",
    alvo_id: 1,
    operacao_id: 1
  },
  {
    nrPonto:"3",
    endereco: "Av. Vicente Risola. 1.988 Bairro Santa Inês - Bhte MG",
    complemento: "Oficina para produção dosarqtefatos",
    alvo_id: 1,
    operacao_id: 1
  }

],{});
},

async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Pontos', null, {});
}
};
