const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Needed to compare encrypted passwords

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true 
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false 
  }
}, {
  timestamps: true 
});

// Adding a custom method to the schema to compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  // 'this.password' refers to the encrypted password in the database
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;