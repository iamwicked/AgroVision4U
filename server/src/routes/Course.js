const express = require('express');
const { getAllCourses, getFeaturedCourse, getRecommendedCourses } = require('../controllers/Course');
const router = express.Router();

router.get('/courses', getAllCourses);
router.get('/courses/featured', getFeaturedCourse);
router.get('/courses/recommended', getRecommendedCourses);

module.exports = router;
