const Game = require('./game.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const game = await Game.find().populate("consolas characters");
        return res.json({
            status: 200,
            message: 'Recovered all games',
            data: {game }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const game = await Game.findById(id);
        if (!game) return next(setError(404, 'Game not found'))
        return res.json({
            status: 200,
            message: 'Recovered  games by Id',
            data: {  game }
        });
    } catch (error) {
        return next(setError(500, 'Failed game'))
    }
}
const getByName = async (req,res,next) =>{
    try {
        const {name} = req.params;
        const  game = await Game.find({name:name})
        if (!game) return next(setError(404, 'Game not found'))
        return res.json({
            status: 200,
            message: 'Recovered  games by Name',
            data: {  game }
        });
    } catch (error) {
        return next(setError(500, 'Failed game by name'))
    }
}

const create = async (req, res, next) => {
    try {
        const gameTo = new Game(req.body)
        const gameInBd = await gameTo.save()
        return res.json({
            status: 201,
            message: 'Created new game',
            data: { gameInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created game'))
    }
}
const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const game = new Game(req.body);
        game._id = id;
        const updatedGame = await Game.findByIdAndUpdate(id, game)
        if (!updatedGame) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated game by id',
            data: {  updatedGame }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated game'));
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        const removedGame = await Game.findByIdAndDelete(id)
        if (!removedGame) return next(setError(404, 'game not found'))
        return res.json({
            status: 200,
            message: 'removed game',
            data: {  removedGame }
        });
    } catch (error) {
        return next(setError(500, 'Failed removed game'));
    }
}




module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    getByName
      
}