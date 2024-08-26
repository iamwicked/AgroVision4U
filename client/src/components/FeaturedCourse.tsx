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

const FeaturedCourse: React.FC = () => {
    const [course, setCourse] = useState<Course | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFeaturedCourse = async () => {
            try {
                const response = await axios.get<Course>('https://agrobackend-inxen38l4-iamwickeds-projects.vercel.app/courses/featured');
                setCourse(response.data);
            } catch (error) {
                console.error('Error fetching featured course', error);
                setError('Failed to load featured course. Please try again.');
            }
        };

        fetchFeaturedCourse();
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-md p-8 my-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Course</h2>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                course && (
                    <div className="text-center">
                        <img src={"images/img_adobestock_566928736.png"} alt={course.title} className="w-full h-60 object-cover rounded-md mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-gray-700 mt-2">{course.description}</p>
                        <div className="mt-3 flex items-center justify-center space-x-4">
                            <span className="text-indigo-600 font-bold">₹{course.price}</span>
                            <span className="text-yellow-500 text-sm">⭐ {course.ratings}</span>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default FeaturedCourse;