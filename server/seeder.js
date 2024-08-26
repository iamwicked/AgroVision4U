const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import models
const Category = require('./src/models/Category');
const Course = require('./src/models/Course');
const FAQ = require('./src/models/FAQ');
const User = require('./src/models/User');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Sample data
const categories = [
  { name: 'Programming', slug: 'programming', description: 'Courses related to various programming languages and technologies.' },
  { name: 'Design', slug: 'design', description: 'Courses focused on design principles, tools, and techniques.' },
  { name: 'Marketing', slug: 'marketing', description: 'Courses covering marketing strategies, tools, and digital marketing.' },
];

const courses = [
  {
    title: 'Learn JavaScript',
    description: 'An in-depth guide to JavaScript programming.',
    category: 'Programming',
    price: 100,
    image: 'javascript-course.jpg',
    ratings: 4.5,
    isFeatured: true,
    isRecommended: true,
  },
  {
    title: 'Mastering Photoshop',
    description: 'Become an expert in Photoshop with this comprehensive course.',
    category: 'Design',
    price: 150,
    image: 'photoshop-course.jpg',
    ratings: 4.7,
    isFeatured: true,
    isRecommended: true,
  },
  {
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of machine learning and build your first model.',
    category: 'Programming',
    price: 49.99,
    ratings: 4.8,
    isFeatured: false,
    isRecommended: true,
  },
  {
    title: 'Advanced React with TypeScript',
    description: 'Master React and TypeScript to build scalable and maintainable applications.',
    category: 'Programming',
    price: 79.99,
    ratings: 4.6,
    isFeatured: false,
    isRecommended: false,
  },
];

const faqs = [
  { question: 'What is JavaScript?', answer: 'JavaScript is a programming language.' },
  { question: 'How do I design a logo?', answer: 'You can design a logo using software like Photoshop.' },
];

const users = [
  { name: 'John Doe', email: 'john@example.com', password: 'password123', role: 'student' },
  { name: 'Admin User', email: 'admin@example.com', password: 'adminpassword', role: 'admin' },
];

// Function to insert data
const seedData = async () => {
  try {
    // Insert data into collections
    await Category.insertMany(categories);
    await Course.insertMany(courses);
    await FAQ.insertMany(faqs);
    await User.insertMany(users);

    console.log('Data inserted successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

// Run the seeder function
seedData();
