var keystone = require('micrpkey');
var Types = keystone.Field.Types;

var Partner = new keystone.List('Partner',{
  autokey: { from: 'name_en', path: 'slug', unique: true },
  map: { name: 'name_en' }
});

Partner.add({
    name_en: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    websiteUrl: { type: Types.Text, initial: true, required: true},
    iconUrl: {type: Types.CloudinaryImage, initial: true, required: true},
    homePageIconUrl: {type: Types.CloudinaryImage, initial: true, required: true},
    appearsOnHomePage: {type: Types.Boolean, initial:true, label: 'Show on home'}
});

Partner.defaultColumns = 'name_en, name_hy, name_ru';
Partner.defaultSort = '-appearsOnHomePage';

Partner.register();