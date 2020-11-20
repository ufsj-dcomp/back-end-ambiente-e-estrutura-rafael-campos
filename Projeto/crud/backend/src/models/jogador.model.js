'use strict';
var dbConn = require('./../../config/db.config');
//Jogador object create
var Jogador = function(jogador){
  this.nome           = jogador.nome;
  this.sobrenome      = jogador.sobrenome;
  this.time           = jogador.time;
  this.posicao        = jogador.posicao;
  this.idade          = jogador.idade;
  this.status         = jogador.status;  
};
Jogador.create = function (newEmp, result) {
dbConn.query("INSERT INTO jogadores set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  resp.statu(500).end();
}
else{
  resp.status(200);
  resp.json(result.insertId);
}
});
};

Jogador.findById = function (id, result) {
dbConn.query("Select * from jogadores where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Jogador.findAll = function (result) {
dbConn.query("Select * from jogadores", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('jogadores : ', res);
  result(null, res);
}
});
};
Jogador.update = function(id, jogador, result){
dbConn.query("UPDATE jogadores SET nome=?,sobrenome=?,time=?,posicao=?,idade=?,status=? WHERE id = ?", [jogador.nome,jogador.sobrenome,jogador.time,jogador.posicao,jogador.idade,jogador.status, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Jogador.delete = function(id, result){
dbConn.query("DELETE FROM jogadores WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports = Jogador;