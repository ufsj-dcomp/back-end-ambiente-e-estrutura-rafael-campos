var express = require("express");
var app     = express();
var path    = require("path");


app.get('/aplicativo', (req, res) => {
    res.send('Aplicativo Exemplo')
})
app.get('/html',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.post('/imagens', function (req, res) {
    res.send('Imagem 1 – Imagem 2 – Imagem3');
});  
app.delete('/clientes/10', function(req,res){
    res.send("Cliente número 10 removido com sucesso");
});

app.listen(3000,function(){
  console.log('Example app listening on port 3000!');
});