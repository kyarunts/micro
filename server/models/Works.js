var mongoose = require('mongoose');

var WorkSchema = new mongoose.Schema({
    name: {
        type: String
    },
    photo: {
        type: Buffer
    }
});

module.exports = mongoose.model('Work', WorkSchema);