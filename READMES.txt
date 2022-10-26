## Comandos git

>> git config --list
>> sudo git checkout -b native
>> sudo git add .
>> sudo git commit -m "crud com add"
>> git push --set-upstream origin native

## Formulários do react native

### outras opções de componentes

reactnative.dev/docs/



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






#### INTRODUÇÃO DO BANCO MYSQL E SEQUELIZE


 
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

##### Criando models

npx sequelize-cli model:create --name Comarcas --attributes codigo:string,nome:string,descricao:string;
npx sequelize-cli model:create --name Recon --attributes orientacao:string,dataPrev:date,dataReal:date,infoColetadas:string,ponto_id:TINYINT,operacao_id:TINYINT,status:string,atvDesenvolidasObservadas:string,tipoArea:string;
npx sequelize-cli model:create --name Usuarios --attributes codigo:string,nome:string,login:string,senha:string,img:string,funcao:string,setor:string,email:string,token:string,expireIn:date;
npx sequelize-cli model:create --name equiperecon --attributes funcao:string,usuario_id:TINYINT,recon_id:TINYINT;
npx sequelize-cli model:create --name alvo --attributes nome: string,alcunha:string,cpf:string,rg:string,ufrg:string,sexo:string,dtNasc:date
npx sequelize-cli model:create --name ponto --attributes nrPonto:string,endereco:string,latLong:string,descricao:string,complemento:string,alvo_id:TINYINT,operacao_id:TINYINT




Arquivo Model: 

Comarcas.init({
    codigo: DataTypes.STRING,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
}


#### Criando migrates

npx sequelize-cli db:migrate

#### Criando seed

npx sequelize-cli seed:generate --name demo-Comarcas;
npx sequelize-cli seed:generate --name demo-Usuarios;
npx sequelize-cli seed:generate --name demo-Recons;
npx sequelize-cli seed:generate --name demo-Equiperecons;
npx sequelize-cli seed:generate --name demo-alvo;
npx sequelize-cli seed:generate --name demo-ponto;


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


### CRIANDO REALACIONAMENTOS

#### *****************  1:N

exemplo: 1 alvo para N pontos

#### NOS ARQUIVOS DE MODEL

##### Associação no alvo
  Alvo.associate = function(models) {
    Alvo.hasMany(models.Ponto,{foreignKey:'alvo_id',as:'pontos'})
  };
  
##### Associação no ponto

 Ponto.associate = function(models) {
    Ponto.belongsTo(models.Alvo,{foreignKey:'alvo_id',as:'alvo'})
  };

#### NOS ARQUIVOS DE MIGRATE

####### TOMEI UM CORO: Dava um erro "errno: 150 "Foreign key constraint is incorrectly formed"
Era porque no arquivo de MIGRATE, no nome dados a propriedade "model" do objeto "refrences" da forengkey, deve-se colocar o nome da "tabela"

  alvo_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'Alvos',
          key:'id'
        },
        onDelete:'CASCADE'
      },



#### *****************    N:M


 
#### NOS ARQUIVOS DE MODEL

##### No Arquivo recon
Recon.hasMany(models.equipeRecon,{foreignKey:'recon_id'})

##### No Arquivo usuarios
Usuarios.hasMany(models.equipeRecon,{foreignKey:'usuario_id'})

##### No Arquivo equiperecon:

equiperecon.belongsTo(models.usuarios,{foreignKey:'usuario_id'})
equiperecon.belongsTo(models.recon,{foreignKey:'recon_id'})

#### NOS ARQUIVOS DE MIGRATE

Como o ponto é quem recebe a chave estrangeira de alvo, configuro o arquivo de "MIGRATE DO PONTO", inserindo a chave estrangeira

   allowNull:false,
        type: Sequelize.INTEGER,
        references:{model:'Alvo',key:'id'}
      },
      
###### rodo Migrate



##### NO ARQUIVO equipeRecon

      usuario_id: {
        allowNull:false,
        type: Sequelize.TINYINT,
        references:{model:'usuarios',key:'id'}
      },
      recon_id: {
        allowNull:false,
        type: Sequelize.TINYINT,
        references:{model:'recon',key:'id'}
      },
      
#### 





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



### PASSANDO PARAMETROS ENTRE TELAS NO REACT-NATIVE

1) ACRESCENTA O PARAMETRO NO NAVIGATE

navigation.navigate("comarcaList",{'login':login})

2) PEGANDO NA PÁGINA 2

function ComarcaList({route}) {
  <Header title="Lista de comarcas" login={route.params?.login}/>





### PARAMETROS GLOBAIS CONTEXT API        




##### 1) Crio no root a pasta contexts/Auth.jsx

######    Auth.jsx

import React,{useState,createContext} from "react";
export const AuthContext = createContext({})

function AuthProvider({children}){
    const [login,setLogin] = useState('')

    function fillLogin(usuario){  // ESSA FUNCÇÃO É PARA PODER SETAR VALOR NO LOGIN DE QUALQUER LUGAR
        setLogin(usuario)
    }
    
    return(
        <AuthContext.Provider value={{'login':login,fillLogin}}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;


######    FIM Auth.jsx

##### 2) no arquivo app, importo e coloco o objeto <AuthProvider> Envolvendo o componente de Rotas, para que todas as telas tenham acesso as variáveis

###### Metodo <AuthProvider>
import AuthProvider from './contexts/Auth';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
###### fim Metodo <AuthProvider>

##### 3) Consumindo o dado:

####### Acrescento no arquivo que vai consumir "useContext":

import { useEffect, useState, useContext } from "react";

####### Importo a variavel AuthContext do arquivo de contexto

import {AuthContext} from '../contexts/Auth'

####### Busco a variável que quero desconstruindo o AuthContext

const {login} = useContext(AuthContext)


##### 3) Setando o dado:

###### Para setar deixo um método no arquivo de contexto e exporto para ele poder ser chamado de qualquer luga, passando o valor como parametro

   function fillLogin(usuario){  // ESSA FUNCÇÃO É PARA PODER SETAR VALOR NO LOGIN DE QUALQUER LUGAR
        setLogin(usuario)
    }
###### Crio um hook interno pra gravar esse valor:]

const [login,setLogin] = useState('')


#####   MENTORIA

- Navegação no interceptor: 
- A tab pro menu sanduíche: https://reactnavigation.org/docs/drawer-based-navigation/
- Lib de ícones: https://github.com/oblador/react-native-vector-icons
- Para notificações: https://notifee.app/
- Formulário e validações: https://react-hook-form.com/ e https://www.npmjs.com/package/@hookform/resolvers
- Câmera: https://github.com/mrousavy/react-native-vision-camera
- Mapas: https://github.com/react-native-maps/react-native-maps
- Pra mexer com banco, Knex: https://knexjs.org/ e Prisma: https://www.prisma.io/



 // Crio Token
            var token = jwt.sign({id:req.body.login},"yhvh77",{expiresIn:'1m'})
            //Crio refresh
            const refresh = cripto.randomBytes(24).toString('hex');
            //defini data expiração
            const dataAtual = new Date()
            dataAtual.setHours(dataAtual.getHours()-3)
            // dataExpiracao =dataAtual.setMonth(dataAtual.getMonth()+1)
            const minutos = dataAtual.getMinutes()+2
            const dataExpiracao = dataAtual.setMinutes(minutos)
            
            //preencho dado pra gravar e gravo
            let data = {'token':refresh,'expireIn':dataExpiracao}
            
            await database.Usuarios.update(data,{where:{id:usuarioLogado.id}})
           
            res.status(200).send({'token':token,'refreshToken':refresh,'funcao':usuarioLogado.funcao,'email':usuarioLogado.email,'setor':usuarioLogado.setor})





















