 var express = require('express');
 var App = express.Router();
 var Jogadores = getmodule('api/jogadores');

 /* GET home page. */
 App.route('/jogadores')
     .get(jogadores.list)
    .post(jogadores.create);

 App.route('/jogadores/:id')
     .get(jogadores.getById)
     .put(jogadores.update)
     .delete(jogadores.delete);

module.exports = App;
