const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    images: { type: String, required: true },
    date: { type: String, required: true },
    games: [{ type:Schema.Types.ObjectId, ref:"games"}],
   

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('consolas', schema);