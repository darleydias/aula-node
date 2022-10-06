## CURSO DE NODE

Professor valdair elaborata

Os arquivos:

> 1. package.json
> 2. package-lock.json

Serão versionados. 

O node_modules vai para o .gitignore  

npm init crio o projeto node

npm install alguma coisa, ele cria a pasta noder_modules

Posso apagar a pasta node_modules, por exemplo para versionar e depois consigo remontar o projeto com o comando "npm install" (sem nada depois do install). 

sudo npm install express

##### swagger  ########

sudo npm install swagger-autogen
sudo npm i swagger-ui-express
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger_output.json')
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))

#### disponibilizando um mongo

Mongoose comunica com o banco

atlas - 
https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjdx6KOqsL5AhU2Q0gAHWx7BQQYABABGgJjZQ&ohost=www.google.com&cid=CAESWOD2vznRlvUFJlgDXh82yNNpvgPIo16cCiKtWsnjC0W7Ezkwdm-CuWuOU39mmt4cwRxtn2I_kt5aC9aZbdeTAG3CrotQGpoIz9LuLSj5a57ErPS9QwlLAbc&sig=AOD64_06ziAhEDCizAXrJUNiHJsd-ubudw&q&adurl&ved=2ahUKEwixpJyOqsL5AhVPJrkGHd_VD6oQ0Qx6BAgDEAE

https://mongoosejs.com/

[19:39] valdairelaborata (Convidado)
    
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

<https://teams.microsoft.com/l/message/19:Tjq-XqrsJhpQe7PxhboHT9j2LeJVzhoy3WAXTRo4YjI1@thread.tacv2/1660343996682?tenantId=f138c62b-ba24-43bc-acda-1e759859d452&amp;groupId=c288cabe-f020-4040-87e1-b4c631dd6a4d&amp;parentMessageId=1660340810190&amp;teamName=Back-End com NodeJs, Npm, Yarn e MongoDB - 12797&amp;channelName=Geral&amp;createdTime=1660343996682>

Meddlewares

express-validator

jsonwebtoken

Build bancoMongoose a65f3471

git flow


#### INTRODUÇÃO DO BANCO MYSQL E SEQUELISE 1995  sudo git checkout -b comModais
 
sudo git checkout -b comMysql

sudo git add .

sudo git commit -m "modais e validacao login"

sudo git push --set-upstream origin comMysql

mysql -u root

create database 'db_catena'

GRANT ALL PRIVILEGES ON db_catena.* TO 'catena'@'localhost' identify by 'catena';

flush privileges;

Crescentar no packages.json :

    "mysql2": "^2.3.3",

    "sequelize": "^5.21.7",

    "sequelize-cli": "^5.5.1",


sudo rm -rf node_modules 

sudo npm i

#### Inicializano pastas sequelize

npx sequelize-cli init (não faça com sudo!!!!)



foram geradas as pastas:

config/config.json

models

migrations

seeders

#### configurar arquivo config/config.json:

  "development": {
    "username": "catena",
    "password": "catena",
    "database": "db_catena",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },

#### Criando modelos

https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types

npx sequelize-cli model:create --name Comarcas --attributes codigo:string,nome:string,descricao:string

Arquivo Model: 

Comarcas.init({
    codigo: DataTypes.STRING,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
}


#### Criando migrates

npx sequelize-cli db:migrate

#### Criando seed

npx sequelize-cli seed:generate --name demo-comarcas


#### Populando seed


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

  
npx sequelize-cli db:seed:all



#### Criando controller

https://sequelize.org/v5/manual/querying.html#where

const database = require("../models")

class ComarcaController{
    static async listarComarcas(req,res){
        try {
            const listaComarcas = await database.Comarcas.findAll()
            res.status(200).json({listaComarcas})   
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    ....
}
module.exports  = ComarcaController

### Erro

Estava dando um erro maldito:

/home/darley/nomenos/aula-node/node_modules/sequelize/lib/sequelize.js:496
      this.importCache[importPath] = defineCall(this, DataTypes);
                                     ^

TypeError: defineCall is not a function
    at Sequelize.import (/home/darley/nomenos/aula-node/node_modules/sequelize/lib/sequelize.js:496:38)

"Era porque tinha um arquivo login.js na pasta models vazio" !!!!!

#### Criando model usuarios
npx sequelize-cli model:create --name Usuarios --attributes codigo:string,nome:string,login:string,senha:string,img:string,funcao:string,setor:string,email:string,token:string,expireIn:date





