const Comarcas = require('../models/comarcas')
exports.incluir = (req,res)=>{
  // #swagger.tags = ['Comarcas']
  // #swagger.description = "Inserir uma comarca" 
    
// res.status(201).send('Inserindo comarcas')
console.log(req.body)

Comarcas.create(req.body,(err,data)=>{
  if(err){
    res.status(501).send("erro ao conectar")
  }else{
    res.status(501).send("Comarca Criada")
  }
})
}
exports.listar = (req,res)=>{
    // #swagger.tags = ['Comarcas']
    // #swagger.description = "lista de comarcas " 
    let comarca =[{
      codigo:"01",
      nome:"BH",
      descricao:"Comarca de BH"
    },
    {
      codigo:"02",
      nome:"Contagem",
      descri:"Comarca de Contagem"
    }]
    res.status(200).send('segue lista')
    console.log((comarca))
}
exports.buscar = (req,res)=>{
  // #swagger.tags = ['Comarcas']
  // #swagger.description = "Pesquisar uma comarca" 
  console.log(JSON.stringify(req.params.codigo))
  res.status(200).send('Buscar uma Comarca')
}
exports.atualizar = (req,res)=>{
  // #swagger.tags = ['Comarcas']
  // #swagger.description = "Atualizar uma comarca" 
  let comarca ={
    codigo:req.body.codigo,
    nome:req.body.nome,
    descri:req.body.descri
  }
  console.log(JSON.stringify(req.params.codigo))
  res.status(201).send('Atualizando')
  console.log(comarca)
}
exports.apagar = (req,res)=>{
   // #swagger.tags = ['Comarcas']
  // #swagger.description = "Apagar uma comarca" 
  console.log(JSON.stringify(req.params.codigo))
  res.status(200).send('Apagando')
}
