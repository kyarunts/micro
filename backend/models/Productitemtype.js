var keystone = require('micrpkey');
var Types = keystone.Field.Types;

var Productitemtype = new keystone.List('Productitemtype',{
  autokey: { from: 'name_en', path: 'slug', unique: true },
  map: { name: 'name_en' }
});

Productitemtype.add({
    name_en: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    iconName: { type: Types.Text, initial: true, required: true}
});

Productitemtype.defaultColumns = 'name_en, name_hy, name_ru';
Productitemtype.defaultSort = '-name_en';

Productitemtype.register();