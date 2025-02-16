const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    validate: {
      validator: function(v) {
        return v.length >= 4;
      },
      message: 'Username is too short, it has to be at least 4 characters long'
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Email Address invalid'] 
  },
  city: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[A-Za-z\s]+$/.test(v);
      },
      message: 'City name should contain only alphabets and spaces'
    }
  },
  website: {
    type: String,
    required: true,
    match: [/^(http:\/\/|https:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/, 'Please enter a valid web URL (http or https)'] 
  },
  zipCode: {
    type: String,
    required: true,
    match: [/^\d{5}-\d{4}$/, 'Zip code must be in the format: 12345-1234'] 
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{1}-\d{3}-\d{3}-\d{4}$/, 'Phone number must be in the format: 1-123-123-1234'] 
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
