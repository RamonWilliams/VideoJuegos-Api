const CharacterRoutes = require('express').Router();
const {
    getAll,
    getById,    
    create,
    update,
    remove,
    getByName
     } = require('./character.controller');

CharacterRoutes.get('/', getAll)
CharacterRoutes.get('/:id', getById)
CharacterRoutes.get('/name/:name', getByName)
CharacterRoutes.post('/', create)
CharacterRoutes.patch('/:id', update)
CharacterRoutes.delete('/:id', remove)
module.exports = CharacterRoutes 