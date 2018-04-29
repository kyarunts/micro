var keystone = require('keystone');
var Types = keystone.Field.Types;

var Order = new keystone.List('Order',{
    autokey: { from: 'name', path: 'slug', unique: true },
    noedit: true,
    nocreate: true,
    nodelete: true
});

Order.add({
    name: { type: Types.Text, initial: true, required: true },
    phone: { type: Types.Text, initial: true, required: true },
    email: { type: Types.Email, initial: true, required: true },
    date: { type: Types.Datetime, initial: true, default: Date.now},
    products: { type: Types.Text, initial: true, required: true }
});

Order.defaultColumns = 'name';
Order.defaultSort = '-date';

Order.register();