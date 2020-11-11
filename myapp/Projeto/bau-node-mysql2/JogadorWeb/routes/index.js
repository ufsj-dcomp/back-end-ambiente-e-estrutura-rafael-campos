
var express = require('express');
var router = express.Router();
var Jogadores = require('api/jogadores');

App.route('/jogadores')
	.get(Jogadores.list)
	.post(Jogadores.create);

App.route('/jogadores/:id')
	.get(Jogadores.getById)
	.put(Jogadores.update)
	.delete(Jogadores.delete);

module.exports = router;
