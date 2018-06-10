var keystone = require('micrpkey');
var Types = keystone.Field.Types;

var Project = new keystone.List('Project',{
  autokey: { from: 'name_en', path: 'slug', unique: true },
  map: { name: 'name_en' }
});

Project.add({
    name_en: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    description_en: { type: Types.Text, initial: true, required: true },
    description_hy: { type: Types.Text, initial: true, required: true },
    description_ru: { type: Types.Text, initial: true, required: true },
    mainImageUrl: {type: Types.CloudinaryImage, initial: true, required: true},
    imageUrls: {type: Types.CloudinaryImages, initial: true, required: true},
    appearsOnHomePage: {type: Types.Boolean, initial:true, label: 'Show on home'}
});

Project.defaultColumns = 'name_en, name_hy, name_ru';
Project.defaultSort = '-appearsOnHomePage';

Project.register();