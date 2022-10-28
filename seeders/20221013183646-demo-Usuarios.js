'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Usuarios', [
        {
        codigo:"134",
        nome: 'Darley Wilson Dias',
        login: 'darley',
        senha: '123123',
        img:'1096841.png',
        funcao:"Chefe",
        setor:"Chefe",
        email:"scrt@catenasystem.com",
        token:"hkjakjdshfahsdhfiruwthlafjkdhau9ogfe87rturahfgaasdjfhw98pargfyhwrkuahgfuhjasjdfasdfjhasdhfk",
        expireIn:new Date(),
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        codigo:"2",
        nome: 'Darley Napoleao',
        login: 'napo',
        senha: '123000',
        img:'1096241.png',
        funcao:"Chefe",
        setor:"Chefe",
        email:"Chefe@catenasystem.com",
        token:"hkjakjdshfahsdhfiruwthlafjkdhau9ogfe87rturahfgaasdjfhw98pargfyhwrkuahgfuhjasjdfGETJUHRTYUIER",
        expireIn:new Date(),
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        codigo:"2",
        nome: 'Délio de assis Quintão',
        login: 'delio',
        senha: '123456',
        img:'0960427.png',
        funcao:"Chefe",
        setor:"Chefe",
        email:"vendas@catenasystem.com",
        token:"hkjakjdshfahsdhfiruwthlafjkdhau9ogfe87rturahfgaasdjfhw98pargfyhwrkuahgfuhjasjdfasdfjhas4tg456y",
        expireIn:new Date(),
        createdAt:new Date(),
        updatedAt:new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
    
  }
}

