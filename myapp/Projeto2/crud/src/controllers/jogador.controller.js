'use strict';
const Jogador = require('../models/jogador.model');
exports.findAll = function(req, res) {
Jogador.findAll(function(err, jogador) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', jogador);
  res.send(jogador);
});
};
exports.create = function(req, res) {
const new_jogador = new Jogador(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Jogador.create(new_jogador, function(err, jogador) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Jogador adicionado sucesso!",data:jogador});
});
}
};
exports.findById = function(req, res) {
Jogador.findById(req.params.id, function(err, jogador) {
  if (err)
  res.send(err);
  res.json(jogador);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Jogador.update(req.params.id, new Jogador(req.body), function(err, jogador) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Jogador sucesso atualizado' });
});
}
};
exports.delete = function(req, res) {
Jogador.delete( req.params.id, function(err, jogador) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Jogador sucesso deletado' });
});
};