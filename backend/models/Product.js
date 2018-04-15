var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product',{
    autokey: { from: 'title', path: 'slug', unique: true },
});

Product.add({
    title: { type: Types.Text, initial: true, required: true },
    description: { type: Types.Textarea, initial: true, required: true},
    date: { type: Types.Datetime, default: Date.now, initial: true, required: true }
});

Product.defaultColumns = 'title|20%, description ';
Product.defaultSort = '-date';

Product.register();