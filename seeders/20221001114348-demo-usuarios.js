'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Usuarios', [
        {
        codigo:"1",
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
        nome: 'Darleu Naoppelao',
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

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
