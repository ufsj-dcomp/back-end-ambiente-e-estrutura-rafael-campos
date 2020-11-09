var express = require('express');
var App = express.Router();
var Jogadores = getmodule('api/jogadores');

App.route('/jogadores')
	.get(Jogadores.list)
	.post(Jogadores.create);

App.route('/jogadores/:id')
	.get(Jogadores.getById)
	.put(Jogadores.update)
	.delete(Jogadores.delete);

module.exports = App;