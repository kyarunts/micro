var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: Buffer
    }
});

module.exports = mongoose.model('Category', CategorySchema);