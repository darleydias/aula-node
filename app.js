const { application } = require('express')
const express = require('express')
const app = express()
app.use('/static',express.static('public'))
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger_output.json')
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
//######## CRUD #############
//######## LISTAR COMARCAS #############

app.get('/comarcas', (req, res)=> {
  res.status(200).send('Listando')
})

//######## BUSCAR COMARCA #############

app.get('/comarcas/:codigo', (req, res)=> {
  res.status(200).send('Buscar uma Comarca')
})

//######## INSERIR COMARCA #############

app.post('/comarcas', (req, res)=> {
  res.status(201).send('Inserindo comarcas')
})

//######## ATRUALIZAR COMARCA #############

app.put('/comarcas', (req, res)=> {
  res.status(201).send('Atualizando')
})

//######## ATUALIZAR COMARCA #############
app.delete('/comarcas', (req, res)=> {
  res.status(200).send('Apagando')
})

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
})