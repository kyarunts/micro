var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    categoryId: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    images: {
        type: Buffer
    }
});

module.exports = mongoose.model('Product', ProductSchema);