var mongoose = require('mongoose');

var PartnerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    logo: {
        type: Buffer
    },
    url: {
        type: String
    }
});

module.exports = mongoose.model('Partner', PartnerSchema);