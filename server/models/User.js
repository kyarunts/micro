const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type:String},
    password: {type:String}
});

UserSchema
.virtual('test')
.get(function () {
  return this.username + ' ' + this.password;
});

UserSchema.pre('save', function (next) {
    const user = this,
    SALT_FACTOR = 10;
  
    if (!user.isModified('password')) return next();
  
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
      if (err) return next(err);
  
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  });

  UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) { return cb(err); }
  
      cb(null, isMatch);
    });
  };
  
  module.exports = mongoose.model('users', UserSchema, 'users');