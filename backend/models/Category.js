var keystone = require('micrpkey');
var Types = keystone.Field.Types;

var Category = new keystone.List('Category',{
  autokey: { from: 'name_en', path: 'slug', unique: true },
  map: { name: 'name_en' }
});

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads'), 
  		publicPath: '/public/uploads', 
	}
});

Category.add({
    name_en: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    iconName: { type: Types.Text, initial: true, required: true}
});

Category.defaultColumns = 'name_en, name_hy, name_ru';
Category.defaultSort = '-name_en';

Category.register();