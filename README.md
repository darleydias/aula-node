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




