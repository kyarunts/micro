var keystone = require('micrpkey');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product',{
    autokey: { from: 'name_en', path: 'slug', unique: true },
    map: { name: 'name_en' }
});

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
        path: keystone.expandPath('uploads/'), 
        publicPath: '/assets/uploads',
        generateFilename: function(file) { 
          return file.originalname
        }
	}
});

Product.add({
    name_en: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    description_en: { type: Types.Markdown, height: 200, initial: true, required: true },
    description_hy: { type: Types.Markdown, height: 200, initial: true, required: true },
    description_ru: { type: Types.Markdown, height: 200, initial: true, required: true },
    home_description_en: {type: Types.Text, initial: true, required: false },
    home_description_hy: {type: Types.Text, initial: true, required: false },
    home_description_ru: {type: Types.Text, initial: true, required: false },
    mainImage: {type: Types.CloudinaryImage, initial: true, required: true},
    imageUrls: {type: Types.CloudinaryImages, initial: true, required: true},
    appearsOnHomePage: {type: Types.Boolean, initial:true, label: 'Show on home'},
    type: { type: Types.Select, options: 'product, spec, catalog', initial: true, default: 'product'},
    category: { type: Types.Relationship, ref: 'Category', initial: true, required: true },
    fileUrl: {type: Types.File, initial: true, storage, required: true},
    fileName: {type: Types.Text, initial: true, required: false},
});

Product.defaultColumns = 'name_en, name_hy, name_ru';
Product.register();