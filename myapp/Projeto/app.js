var express = require("express");
var app     = express();

app.use(express.json());

app.post('/player', (req, res) => {
    var player = req.body;
    console.log(player);    
})

app.get('/player/:playerId', (req, res) => {
    var playerId = req.params.playerId;
    console.log("GET PlayerId: " + playerId);    
})

app.put('/player/:playerId', (req, res) => {
    var playerId = req.params.playerId;
    console.log("PUT PlayerId: " + playerId);    
})

app.delete('/player/:playerId', (req, res) => {
    var playerId = req.params.playerId;
    console.log("DELETE PlayerId: " + playerId);    
})

app.listen(3000, () => {
  console.log('Jogador web - port 3000!');
});