var keystone = require('micrpkey');
var Types = keystone.Field.Types;

var Productitemtype = new keystone.List('Productitemtype',{
    autokey: { from: 'name', path: 'slug', unique: true },
});

Productitemtype.add({
    name_en: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    iconName: { type: Types.Text, initial: true, required: true}
});

Productitemtype.defaultColumns = 'name';
Productitemtype.defaultSort = '-name';

Productitemtype.register();