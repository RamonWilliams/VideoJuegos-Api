const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    images: { type: String, required: true },
    date: { type: String, required: true },
    characters: [{ type:Schema.Types.ObjectId, ref:"characters"}],
    consolas: [{ type:Schema.Types.ObjectId, ref:"consolas"}],

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('games', schema);