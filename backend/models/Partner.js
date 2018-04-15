var keystone = require('keystone');
var Types = keystone.Field.Types;

var Partner = new keystone.List('Partner',{
    autokey: { from: 'name', path: 'slug', unique: true },
});

Partner.add({
    name: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    websiteUrl: { type: Types.Text, initial: true},
    iconUrl: {type: Types.CloudinaryImage, initial: true},
    homePageIconUrl: {type: Types.CloudinaryImage, initial: true},
    appearsOnHomePage: {type: Types.Boolean, initial:true, label: 'Show on home'}
});

Partner.defaultColumns = 'name';
Partner.defaultSort = '-appearsOnHomePage';

Partner.register();