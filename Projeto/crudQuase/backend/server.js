const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');



// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 3000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use(cors());
app.use(express.json());

app.post('/auth', (req,resp) => {
  var user = req.body;

  connection.query("SELECT * FROM usuario WHERE nome = ? and senha = ?", [user.nome, user.senha] , (err, result) =>{
    var usuario = result[0];

    if(result.length == 0) {
        resp.status(401);
        resp.send({token: null, usuario: usuario, success: false});
    } else {
      let token = jwt.sign({id: usuario.nome}, 'crud', {expiresIn: 6000});
      resp.status(200);
      resp.send({token: token, usuario:usuario, success: true});
    }

  });

});

verifica_token = (req, resp, next) => {
  var token = req.headers['x-access-token'];

  if(!token){
    return resp.status(401).end();
  }

  jwt.verify(token, 'crud', (err, decoded) => {
    if (err)
      return resp.status(401).end();

    req.usuario = decoded.id;
    next();
  });
}


// Require jogador routes
const jogadorRoutes = require('./src/routes/jogador.routes')
// using as middleware
app.use('/jogadores', jogadorRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});