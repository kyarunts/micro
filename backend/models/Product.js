var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product',{
    autokey: { from: 'name', path: 'slug', unique: true },
});

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads'), 
  		publicPath: '/public/uploads', 
	}
});


Product.add({
    name: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    description: { type: Types.Text, initial: true, required: true },
    description_hy: { type: Types.Text, initial: true, required: true },
    description_ru: { type: Types.Text, initial: true, required: true },
    mainImage: {type: Types.CloudinaryImage, initial: true, required: true},
    imageUrls: {type: Types.CloudinaryImages, initial: true, required: true},
    appearsOnHomePage: {type: Types.Boolean, initial:true, label: 'Show on home'},
    type: { type: Types.Select, options: 'product, spec, catalog', initial: true, default: 'product'},
    category: { type: Types.Relationship, ref: 'Category', initial: true, required: true },
    fileUrl: {type: Types.File, initial: true, storage, required: true}
});

Product.defaultColumns = 'name';
Product.register();