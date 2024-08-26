const Course = require('../models/course'); 

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getFeaturedCourse = async (req, res) => {
    try {
        const course = await Course.findOne({ isFeatured: true });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getRecommendedCourses = async (req, res) => {
    try {
        const courses = await Course.find({ isRecommended: true });
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
