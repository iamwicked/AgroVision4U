const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    ratings: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    isRecommended: { type: Boolean, default: false },
});

module.exports = mongoose.model('Course', CourseSchema);
