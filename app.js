const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger_output.json')
const routeComarcas = require('./routes/comarcas')
const mongoose = require('mongoose')

const url ='mongodb+srv://darleydias:Catelecom()123@cluster0.vwjrt2z.mongodb.net/?retryWrites=true&w=majority'

const options={

}
mongoose.connection.on('connected',()=>{
  console.log('Conectado ao banco mongo corretamente')
})
mongoose.connection.on('error',(erro)=>{
  console.log('erro ao conectar ao mong'+erro)
})
mongoose.connect(url,options)
app.use('/static',express.static('public'))
app.use(express.json()) // pega o valor do body e transforma em json
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
app.use('/comarcas',routeComarcas)

app.get('/', (req, res)=> {
//  #swagger.tags = ['Principal']
//  #swagger.description = "Página Pricipal" 
 res.status(200).send('Pagina Principal')
})

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
})