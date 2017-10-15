const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,
    meta: mongoose.Schema.Types.Mixed,
    accounts: [{ ref: 'Accounts', type: mongoose.Schema.Types.ObjectId }]
  },
  { timestamps: true }
);

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

const Users = mongoose.model('Users', userSchema);

const accountsSchema = mongoose.Schema(
  {
    username: { type: String, unique: true },
    links: [{ ref: 'Links', type: mongoose.Schema.Types.ObjectId }],
    user: { ref: 'Users', type: String }
  },
  { timestamps: true }
);

const Accounts = mongoose.model('Accounts', accountsSchema);

const linksSchema = mongoose.Schema(
  {
    url: { type: String },
    meta: mongoose.Schema.Types.Mixed,
    account: { ref: 'Accounts', type: String },
    user: { ref: 'Users', type: String },
    clickCount: Number
  },
  { timestamps: true }
);

const Links = mongoose.model('Links', linksSchema);

module.exports = {
  Users: Users,
  Accounts: Accounts,
  Links: Links
};