var keystone = require('keystone');
var Types = keystone.Field.Types;

var Productitem = new keystone.List('Productitem',{
    autokey: { from: 'name', path: 'slug', unique: true },
});

Productitem.add({
    name: { type: Types.Text, initial: true, required: true },
    name_hy: { type: Types.Text, initial: true, required: true },
    name_ru: { type: Types.Text, initial: true, required: true },
    type: { type: Types.Relationship, ref: 'Productitemtype', initial: true, required: true },
    options: {type: Types.TextArray, initial: true, separator : ','}
});

Productitem.defaultColumns = 'name';
Productitem.defaultSort = '-name';

Productitem.register();