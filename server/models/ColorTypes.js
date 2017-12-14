var mongoose = require('mongoose');

var ColorTypeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: Buffer
    }
});

module.exports = mongoose.model('ColorType', ColorTypeSchema);