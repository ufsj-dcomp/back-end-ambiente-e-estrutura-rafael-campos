const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');



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


// Require jogador routes
const jogadorRoutes = require('./src/routes/jogador.routes')
// using as middleware
app.use('/jogadores', jogadorRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});