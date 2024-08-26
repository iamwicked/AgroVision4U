import type { NextPage } from "next";
import { Button, Img} from "../components";
import FrameComponent from "./frame-component";

export type RecommendedCoursesType = {
  className?: string;
};

const RecommendedCourses: NextPage<RecommendedCoursesType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-left text-13xl text-blueviolet-200 font-outfit mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <div className="w-[1272px] flex flex-col items-start justify-start gap-[52px] max-w-full mq750:gap-[26px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[29px] mq750:text-7xl mq750:leading-[38px]">
            Recommended Course
          </h1>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-5 grid-cols-[repeat(4,_minmax(227px,_1fr))] text-xl text-primary-gary mq450:grid-cols-[minmax(227px,_1fr)] mq1100:justify-center mq1100:grid-cols-[repeat(2,_minmax(227px,_394px))]">
          <FrameComponent
            adobeStock1448330491=""
            star24="./images/star.png"
            star26="./images/star.png"
            star25="./images/star.png"
            star27="./images/star.png"
            star28="./images/star.png"
            propColor="#000"
          />
          <FrameComponent
            adobeStock1448330491=""
            star24="./images/star.png"
            star26="./images/star.png"
            star25="./images/star.png"
            star27="./images/star.png"
            star28="./images/star.png"
            propColor="#000"
          />
          <FrameComponent
            adobeStock1448330491="./images/img_adobestock_144833049.png"
            star24="./images/star.png"
            star26="./images/star.png"
            star25="./images/star.png"
            star27="./images/star.png"
            star28="./images/star.png"
            propColor="#000"
          />
          <div className="h-[401px] rounded-xl bg-white border-strokeborder border-[1px] border-solid box-border flex flex-col items-start justify-start pt-0 px-0 pb-[17px] relative gap-[9px]">
            <div className="self-stretch h-[401px] relative rounded-xl bg-white border-strokeborder border-[1px] border-solid box-border hidden z-[0]" />
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[1]"
              alt=""
              src="./images/img_adobestock_210537950.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-[17px]">
              <div className="flex-1 relative tracking-[-0.02em] leading-[160%] font-semibold z-[1] mq450:text-base mq450:leading-[26px]">
                consectetuer adipiscing elit,
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px] text-sm text-dimgray-200">
              <div className="flex-1 relative tracking-[-0.02em] leading-[160%] font-medium whitespace-pre-wrap z-[1]">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh...  `}</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-[17px] text-xs">
              <div className="flex-1 flex flex-col items-start justify-start gap-0.5">
                <div className="relative tracking-[-0.02em] leading-[20px] text-gray-100 inline-block min-w-[113px] z-[1]">
                  Dr. Chatur ramlingam
                </div>
                <div className="relative text-xl tracking-[-0.02em] leading-[160%] font-semibold inline-block min-w-[45px] whitespace-nowrap z-[1] mq450:text-base mq450:leading-[26px]">
                  ₹999
                </div>
                <div className="self-stretch flex flex-row items-end justify-between gap-5 text-sm">
                  <div className="w-28 flex flex-row items-start justify-start gap-0.5">
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-1">
                      <div className="relative tracking-[-0.02em] leading-[160%] font-semibold inline-block min-w-[20px] z-[1]">
                        4.8
                      </div>
                    </div>
                    <div className="w-4 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                      <img
                        className="w-4 h-4 relative rounded-12xs z-[1]"
                        alt=""
                        src="./images/star.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <img
                        className="w-[15px] h-4 relative rounded-12xs z-[1]"
                        alt=""
                        src="./images/star.png"
                      />
                    </div>
                    <div className="w-4 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                      <img
                        className="w-4 h-4 relative rounded-12xs z-[1]"
                        alt=""
                        src="./images/star.png"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <img
                        className="w-[15px] h-4 relative rounded-12xs z-[1]"
                        alt=""
                        src="./images/star.png"
                      />
                    </div>
                    <div className="w-4 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                      <img
                        className="w-4 h-4 relative rounded-12xs z-[1]"
                        alt=""
                        src="./images/star.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-xs text-black">
                    <div className="rounded bg-orange flex flex-row items-start justify-start py-[2.5px] px-2.5 z-[1]">
                      <div className="relative tracking-[-0.02em] leading-[160%] font-medium inline-block min-w-[50px]">
                        Bestseller
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60px] h-[60px] absolute !m-[0] top-[165px] right-[-30px] shadow-[0px_1px_6px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-dark-purple z-[2]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedCourses;
