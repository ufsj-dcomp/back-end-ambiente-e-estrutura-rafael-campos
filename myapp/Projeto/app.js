var express = require("express");
var app     = express();

var mysql = require("mysql");
var conection = mysql.createConnection({
    host: "localhost",
    user: 'tecweb',
    password: "tecweb",
    database: "tecJogadorweb"
});

app.use(express.json());

app.post('/jogador', (req, resp) => {
    var player = req.body;
    console.log("POST - Jogador ");   
    
    conection.query("INSERT INTO jogador = ?", [jogador], (err,result) => {
        if (err) {
            console.log(err);
            resp.status(500).end();
        }else {
            resp.status(200);
            resp.json(result);
        }        
    }); 
});

app.get('/jogador/:playerId', (req, resp) => {
    var playerId = req.params.playerId;
    console.log("GET - playerId: " + playerId);

    conection.query("SELECT * FROM jogador WHERE id = ?", [playerId], (err,result) => {
        if (err) {
            console.log(err);
            resp.status(500).end();
        }else {
            resp.status(200);
            resp.json(result);
        }        
    }); 
});

app.put('/jogador/:playerId', (req, resp) => {
    var playerId = req.params.playerId;
    console.log("PUT - playerId: " + playerId);

    conection.query("UPDATE * FROM jogador WHERE id = ?", [jogador,playerId] , (err,result) => {
        if (err) {
            console.log(err);
            resp.status(500).end();
        }else {
            resp.status(200);            
        }        
    });    
});

app.delete('/jogador/:playerId', (req, resp) => {
    var playerId = req.params.playerId;
    console.log("DELETE - PlayerId: " + playerId);  
    
    conection.query("DELETE * FROM jogador WHERE id = ?", [playerId], (err,result) => {
        if (err) {
            console.log(err);
            resp.status(500).end();
        }else {
            resp.status(200);            
        }        
    }); 
});


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