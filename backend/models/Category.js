var keystone = require('keystone');
var Types = keystone.Field.Types;

var Category = new keystone.List('Category',{
    autokey: { from: 'name', path: 'slug', unique: true },
});

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads'), 
  		publicPath: '/public/uploads', 
	}
});

Category.add({
    name: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    description: { type: Types.Text, initial: true, required: true },
    description_hy: { type: Types.Text, initial: true, required: true },
    description_ru: { type: Types.Text, initial: true, required: true },
    techSpecs:  { type: Types.Text, initial: true, required: true },
    techSpecs_hy:  { type: Types.Text, initial: true, required: true },
    techSpecs_ru:  { type: Types.Text, initial: true, required: true },
    catalog: {
        description: { type: Types.Text, initial: true, required: true },
        description_hy: { type: Types.Text, initial: true, required: true },
        description_ru: { type: Types.Text, initial: true, required: true },
        fileUrl: {type: Types.File, initial: true, storage}
    }
});

Category.defaultColumns = 'name';
Category.defaultSort = '-appearsOnHomePage';

Category.register();