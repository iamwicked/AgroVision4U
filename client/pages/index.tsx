import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import Content from "../components/content";
import Courses from "../components/courses";
import CourseCard from "../components/course-card";
import RecommendedCourses from "../components/recommended-courses";
import FrameComponent3 from "../components/frame-component3";
import Footer from "../components/footer";

const AllSkillPage: NextPage = () => {
  return (
    <div className="w-full relative bg-ghostwhite overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal] text-left text-base text-white font-outfit">
      <header className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[60px] box-border min-h-[220px] max-w-full">
        <FrameComponent1 />
        <FrameComponent2 />
      </header>
      <Content />
      <div className="w-[120px] h-[133px] relative bg-ghostwhite hidden" />
      <Courses />
      <CourseCard />
      <RecommendedCourses />
      <FrameComponent3 />
      <Footer />
      <div className="self-stretch bg-midnightblue overflow-x-auto flex flex-row items-start justify-center py-[18px] px-5 gap-[3px] z-[1]">
        <div className="h-[60px] w-[1512px] relative bg-midnightblue shrink-0 hidden" />
        <div className="relative tracking-[-0.02em] leading-[150%] inline-block min-w-[75px] z-[2]">
          Copyrights
        </div>
        <div className="h-6 w-[19px] relative shrink-0">
          <div className="absolute top-[5px] left-[0px] rounded-[50%] border-white border-[0px] border-solid box-border w-[19px] h-[19px] z-[2]" />
          <div className="absolute top-[0px] left-[5px] tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[8px] z-[3]">
            c
          </div>
        </div>
        <div className="relative tracking-[-0.02em] leading-[150%] z-[2]">
          AgriVision4U Pvt. Ltd. 2024
        </div>
      </div>
    </div>
  );
};

export default AllSkillPage;
