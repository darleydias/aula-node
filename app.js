const { application } = require('express')
const express = require('express')
const app = express()
app.use('/static',express.static('public'))
app.use(express.json()) // pega o valor do body e transforma em json
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger_output.json')
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
//######## CRUD #############

app.get('/', (req, res)=> {
  // #swagger.tag = ['Principal']
  // #swagger.description = "Página Pricipal" 

  res.status(200).send('Listando')
})
//######## LISTAR COMARCAS #############

app.get('/comarcas', (req, res)=> {
  // #swagger.tag = ['Comarcas']
  // #swagger.description = "lista de comarcas" 
  
  res.status(200).send('Listando')
})

//######## BUSCAR COMARCA #############

app.get('/comarcas/:codigo', (req, res)=> {
  console.log(JSON.stringify(req.params.codigo))
  res.status(200).send('Buscar uma Comarca')
})

//######## INSERIR COMARCA #############

app.post('/comarcas', (req, res)=> {
  //console.log(req.body)
  let comarca ={
    codigo:req.body.codigo,
    nome:req.body.nome,
    descri:req.body.descri
  }
  console.log(comarca)
  res.status(201).send('Inserindo comarcas')
})

//######## ATRUALIZAR COMARCA #############

app.put('/comarcas', (req, res)=> {
  console.log(JSON.stringify(req.params.codigo))
  res.status(201).send('Atualizando')
})

//######## ATUALIZAR COMARCA #############
app.delete('/comarcas', (req, res)=> {
  console.log(JSON.stringify(req.params.codigo))
  res.status(200).send('Apagando')
})

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
})