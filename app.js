const express = require('express')
const app = express() 
var cors = require("cors")

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger_output.json')
const routeComarcas = require('./routes/comarcas')
const routeUsuarios = require('./routes/usuarios')
const routeLogin = require('./routes/login')
const routeRecon = require('./routes/recon')
const routeOrgaos = require('./routes/orgaos')
const routeFuncoes = require('./routes/funcoes')
const routePontos = require('./routes/pontos')
const routeAlvos = require('./routes/alvos')

//const routeEvidencias = require('./routes/evidencias')
// const routeTipoEvidencias = require('./routes/tiposEvidencia')
// const routeOperacoes = require('./routes/operacoes')
// const routeItemMenu = require('./routes/itemMenu')
const middlewares = require('./middlewares/middlewares')

app.use(cors())
app.use('/static',express.static('public'))
app.use(express.json()) // pega o valor do body e transforma em json
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
app.use('/usuarios',routeUsuarios)
app.use('/recon',routeRecon)
app.use('/comarcas',middlewares.isAuth,routeComarcas)
// app.use('/comarcas',routeComarcas)
app.use('/orgaos',routeOrgaos)
app.use('/funcoes',routeFuncoes)
app.use('/pontos',routePontos)
app.use('/login',routeLogin)
app.use('/alvos',routeAlvos)
// app.use('/operacoes',routeOperacoes)
// app.use('/comarcas',middlewares.isAuth,routeComarcas)
// app.use('/evidencias',routeEvidencias)
// app.use('/itemMenu',routeItemMenu)
// app.use('/tiposEvidencia',routeTipoEvidencias)


app.get('/', (req, res)=> {
//  #swagger.tags = ['Principal']
//  #swagger.description = "Página Pricipal" 
 res.status(200).send('Pagina Principal')
})


app.listen(process.env.PORT||3000)