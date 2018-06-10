var keystone = require('micrpkey');
var Types = keystone.Field.Types;

var Productitem = new keystone.List('Productitem',{
  autokey: { from: 'name_en', path: 'slug', unique: true },
  map: { name: 'name_en' }
});

Productitem.add({
    name_en: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    type: { type: Types.Relationship, ref: 'Productitemtype', initial: true, required: true },
    options: {type: Types.TextArray, initial: true, separator : ','}
});

Productitem.defaultColumns = 'name_en, name_hy, name_ru';
Productitem.defaultSort = '-name_en';

Productitem.register();