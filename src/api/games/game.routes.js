const GameRoutes = require('express').Router();
const {
    getAll,
    getById,    
    create,
    update,
    remove,
    getByName
     } = require('./game.controller');

GameRoutes.get('/', getAll)
GameRoutes.get('/:id', getById)
GameRoutes.get('/name/:name', getByName)
GameRoutes.post('/', create)
GameRoutes.patch('/:id', update)
GameRoutes.delete('/:id', remove)
module.exports = GameRoutes 