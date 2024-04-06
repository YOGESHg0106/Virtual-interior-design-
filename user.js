const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, // The email field is required
    unique: true, // Each email must be unique
    lowercase: true, // Convert email to lowercase before saving
    trim: true // Trim whitespace from the beginning and end of email
  },
  password: {
    type: String,
    required: true // The password field is required
  }
});

// Create the User model using the user schema
const User = mongoose.model('User', userSchema);

module.exports = User;
