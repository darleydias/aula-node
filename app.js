var express = require('express');
var app = express();

app.get('/', (req, res)=> {
  res.send('Olá Mundo!');
});

app.get('/opa', (req, res)=> {
  res.send('Opa Mundo!');
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});