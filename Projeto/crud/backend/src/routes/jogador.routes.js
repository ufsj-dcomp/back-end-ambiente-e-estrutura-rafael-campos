const express = require('express')
const router = express.Router()
const jogadorController =   require('../controllers/jogador.controller');
// Retrieve all jogadores
router.get('/', jogadorController.findAll);
// Create a new jogador
router.post('/', jogadorController.create);
// Retrieve a single jogador with id
router.get('/:id', jogadorController.findById);
// Update a jogador with id
router.put('/:id', jogadorController.update);
// Delete a jogador with id
router.delete('/:id', jogadorController.delete);
module.exports = router