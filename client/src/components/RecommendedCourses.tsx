import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the Course interface based on your mongoose schema
interface Course {
    _id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    image: string;
    ratings: number;
    isFeatured: boolean;
    isRecommended: boolean;
}

const RecommendedCourses: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecommendedCourses = async () => {
            try {
                const response = await axios.get<Course[]>('http://localhost:5000/courses/recommended');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching recommended courses', error);
                setError('Failed to load recommended courses. Please try again.');
            }
        };

        fetchRecommendedCourses();
    }, []);

    return (
        <div className="bg-[#F5F2F8]  py-8">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Recommended Courses</h2>
                {error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map(course => (
                            <div key={course._id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                <img src={"images/img_adobestock_461215526.png"} alt={course.title} className="w-full h-48 object-cover rounded-md" />
                                <h3 className="text-xl font-semibold text-gray-900 mt-4">{course.title}</h3>
                                <p className="text-gray-700 mt-2">{course.description}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-indigo-600 font-bold">₹{course.price}</span>
                                    <span className="text-yellow-500 text-sm">⭐ {course.ratings}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecommendedCourses;