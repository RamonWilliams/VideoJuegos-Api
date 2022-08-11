const Character = require('./character.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const character = await Character.find().populate("games");
        return res.json({
            status: 200,
            message: 'Recovered all characeters',
            data: { character }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const character = await Character.findById(id);
        if (!character) return next(setError(404, 'Character not found'))
        return res.json({
            status: 200,
            message: 'Recovered  characters by Id',
            data: {  character }
        });
    } catch (error) {
        return next(setError(500, 'Failed character'))
    }
}
const getByName = async (req,res,next) =>{
    try {
        const {name} = req.params;
        const  character = await Character.find({name:name})
        if (!character) return next(setError(404, 'Character not found'))
        return res.json({
            status: 200,
            message: 'Recovered  characters by Name',
            data: {  character }
        });
    } catch (error) {
        return next(setError(500, 'Failed character by name'))
    }
}

const create = async (req, res, next) => {
    try {
        const characterTo = new Character(req.body)
        const characterInBd = await characterTo.save()
        return res.json({
            status: 201,
            message: 'Created new character',
            data: { characterInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created character'))
    }
}
const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const character = new Character(req.body);
        character._id = id;
        const updatedCharacter = await Serie.findByIdAndUpdate(id, character)
        if (!updatedCharacter) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated character by id',
            data: {  updatedCharacter }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated character'));
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        const removedCharacter = await Character.findByIdAndDelete(id)
        if (!removedCharacter) return next(setError(404, 'character not found'))
        return res.json({
            status: 200,
            message: 'removed character',
            data: {  removedCharacter }
        });
    } catch (error) {
        return next(setError(500, 'Failed removed character'));
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