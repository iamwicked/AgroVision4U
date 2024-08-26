import React from 'react';
import Header from './components/Header/index';
import FeaturedCourse from './components/FeaturedCourse';
import RecommendedCourses from './components/RecommendedCourses';
import CourseList from './components/CourseList';
import FAQ from './components/FAQ';
import Footer from './components/Footer/index';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <CourseList />
        <FeaturedCourse />
        <RecommendedCourses />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;