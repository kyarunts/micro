var keystone = require('keystone');
var Types = keystone.Field.Types;

var Project = new keystone.List('Project',{
    autokey: { from: 'name', path: 'slug', unique: true },
});

Project.add({
    name: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    description: { type: Types.Text, initial: true, required: true },
    description_hy: { type: Types.Text, initial: true, required: true },
    description_ru: { type: Types.Text, initial: true, required: true },
    mainImageUrl: {type: Types.CloudinaryImage, initial: true, required: true},
    imageUrls: {type: Types.CloudinaryImages, initial: true, required: true},
    appearsOnHomePage: {type: Types.Boolean, initial:true, label: 'Show on home'}
});

Project.defaultColumns = 'name';
Project.defaultSort = '-appearsOnHomePage';

Project.register();