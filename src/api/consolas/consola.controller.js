const Consola = require('./consola.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const consolas = await Consola.find().populate("games");
        return res.json({
            status: 200,
            message: 'Recovered all consolas',
            data: {consolas }
        });
    } catch (error) {
        return next(setError(500, 'Failed all codes'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const consola = await Consola.findById(id);
        if (!consola) return next(setError(404, 'Consola not found'))
        return res.json({
            status: 200,
            message: 'Recovered  consolas by Id',
            data: {  consola }
        });
    } catch (error) {
        return next(setError(500, 'Failed consola'))
    }
}
const getByName = async (req,res,next) =>{
    try {
        const {name} = req.params;
        const  consola = await Consola.find({name:name})
        if (!consola) return next(setError(404, 'Consola not found'))
        return res.json({
            status: 200,
            message: 'Recovered  consolas by Name',
            data: { consola }
        });
    } catch (error) {
        return next(setError(500, 'Failed consola by name'))
    }
}

const create = async (req, res, next) => {
    try {
        const consolaTo = new Consola(req.body)
        const consolaInBd = await consolaTo.save()
        return res.json({
            status: 201,
            message: 'Created new consola',
            data: { consolaInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created consola'))
    }
}
const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const consola = new Consola(req.body);
        consola._id = id;
        const updatedConsola = await Consola.findByIdAndUpdate(id, consola)
        if (!updatedConsola) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated consola by id',
            data: {  updatedConsola }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated consola'));
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        const removedConsola = await Consola.findByIdAndDelete(id)
        if (!removedConsola) return next(setError(404, 'consola not found'))
        return res.json({
            status: 200,
            message: 'removed consola',
            data: {  removedConsola }
        });
    } catch (error) {
        return next(setError(500, 'Failed removed consola'));
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