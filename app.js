const express = require('express')
const app = express()
app.use('/static',express.static('public'))

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