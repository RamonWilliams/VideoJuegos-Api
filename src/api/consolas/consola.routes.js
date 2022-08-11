const ConsolaRoutes = require('express').Router();
const {
    getAll,
    getById,    
    create,
    update,
    remove,
    getByName
     } = require('./consola.controller');

ConsolaRoutes.get('/', getAll)
ConsolaRoutes.get('/:id', getById)
ConsolaRoutes.get('/name/:name', getByName)
ConsolaRoutes.post('/', create)
ConsolaRoutes.patch('/:id', update)
ConsolaRoutes.delete('/:id', remove)
module.exports = ConsolaRoutes 