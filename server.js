const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define MongoDB schema and model
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Sign-up endpoint
app.post('/signup', async (req, res) => {
  // Sign-up logic here
});

// Login endpoint
app.post('/login', async (req, res) => {
  // Login logic here
});

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the sign-up and login API!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Sign-up endpoint
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create new user
      const newUser = new User({ email, password });
      await newUser.save();
  
      res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
      console.error('Error signing up user:', error);
      res.status(500).json({ message: 'Failed to sign up user. Please try again later.' });
    }
  });
  