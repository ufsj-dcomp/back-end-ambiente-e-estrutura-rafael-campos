'use strict';
var dbConn = require('./../../config/db.config');
//jogador object create
var jogador = function(jogador){
  this.nome           = jogador.nome;
  this.sobrenome      = jogador.sobrenome;
  this.time           = jogador.time;
  this.posicao        = jogador.posicao;
  this.idade          = jogador.idade;
  this.status         = jogador.status;

};
jogador.create = function (newEmp, result) {
dbConn.query("INSERT INTO jogador set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
jogador.findById = function (id, result) {
dbConn.query("Select * from jogador where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
jogador.findAll = function (result) {
dbConn.query("Select * from jogador", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('jogador : ', res);
  result(null, res);
}
});
};
jogador.update = function(id, jogador, result){
dbConn.query("UPDATE jogador SET nome=?,sobrenome=?,time=?,posicao=?,idade=?,status=? WHERE id = ?", [jogador.nome,jogador.sobrenome,jogador.time,jogador.posicao,jogador.idade,jogador.status, id], function (err, res) {
if(err) {
  console.log("error: ", err);
}else{
  result(null, res);
}
});
};
jogador.delete = function(id, result){
dbConn.query("DELETE FROM jogador WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= jogador;