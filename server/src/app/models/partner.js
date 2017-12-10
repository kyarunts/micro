var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var PartnerSchema = new Schema({
    name_am: {type: String, required: true},
    name_ru: { type: String, required: true },
    name_eng: { type: String, required: true },
    logo: String,
    url: String
});

PartnerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Partner', PartnerSchema);
