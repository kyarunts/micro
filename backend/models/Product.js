var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product',{
    autokey: { from: 'name', path: 'slug', unique: true },
});

Product.add({
    name: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    iconUrl: {type: Types.CloudinaryImage, initial: true},
    imageUrls: {type: Types.CloudinaryImages, initial: true},
    appearsOnHomePage: {type: Types.Boolean, initial:true, label: 'Show on home'},
    category: { type: Types.Relationship, ref: 'Category', initial: true },
});

Product.defaultColumns = 'name';
Product.register();