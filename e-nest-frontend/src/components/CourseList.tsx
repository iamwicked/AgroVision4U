import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Course {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  ratings: number;
}

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get<Course[]>('http://localhost:5000/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses', error);
        setError('Failed to load courses. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading courses...</div>;
  }

  return (
    <section className="space-y-8">
      <header className="text-center">
        <h2 className="text-4xl font-bold text-purple-800">Explore all courses of Agriculture</h2>
        <p className="text-gray-600 mt-2">Lorem ipsum is simply dummy text of the printing and typesetting industry...</p>
      </header>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map(course => (
            <article key={course._id} className="bg-white rounded-lg shadow-md p-4">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-lg font-semibold text-gray-900 mt-2">{course.title}</h3>
              <p className="text-gray-700 mt-1">{course.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-indigo-600 font-bold">₹{course.price}</span>
                <span className="text-yellow-500 text-sm">⭐ {course.ratings}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default CourseList;