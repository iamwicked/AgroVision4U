const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS to allow all origins
app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json());

// Import routes
const categoryRoutes = require('./routes/Category');
const courseRoutes = require('./routes/Course');
const faqRoutes = require('./routes/FAQ');

// Use routes
app.use('/', categoryRoutes);
app.use('/', courseRoutes);
app.use('/', faqRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));