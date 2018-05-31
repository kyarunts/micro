var keystone = require('micrpkey');
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
    name_en: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    iconName: { type: Types.Text, initial: true, required: true}
});

Category.defaultColumns = 'name';
Category.defaultSort = '-name';

Category.register();