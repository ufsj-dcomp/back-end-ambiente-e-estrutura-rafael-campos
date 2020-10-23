var express = require("express");
var app     = express();

app.use(express.json());

app.post('/jogador', (req, resp) => {
    var player = req.body;
    console.log(player);    
})

app.get('/jogador/:playerId', (req, resp) => {
    var playerId = req.params.playerId;
    console.log("GET - PlayerId: " + playerId);    
})

app.put('/jogador/:playerId', (req, resp) => {
    var playerId = req.params.playerId;
    console.log("PUT - PlayerId: " + playerId);    
})

app.delete('/jogador/:playerId', (req, resp) => {
    var playerId = req.params.playerId;
    console.log("DELETE - PlayerId: " + playerId);    
})


app.post('/user', (req, resp) => {
    var user = req.body;
    console.log(user);    
})

app.get('/user/:userId', (req, resp) => {
    var playerId = req.params.userId;
    console.log("GET UserId: " + playerId);    
})

app.put('/user/:userId', (req, resp) => {
    var playerId = req.params.userId;
    console.log("PUT UserId: " + userId);    
})

app.delete('/user/:userId', (req, resp) => {
    var playerId = req.params.playerId;
    console.log("DELETE UserId: " + userId);    
})

app.listen(3000, () => {
  console.log('Jogador web - port 3000!');
});