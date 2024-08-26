import type { NextPage } from "next";
import GroupComponent from "./group-component";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-left text-13xl text-blueviolet-200 font-inter mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <div className="w-[1272px] flex flex-col items-start justify-start gap-10 max-w-full mq750:gap-5">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-6">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[29px] mq750:text-7xl mq750:leading-[38px]">
            Frequently Asked Question
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] max-w-full text-base text-primary-gary mq1100:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[426px] max-w-full mq750:min-w-full">
            <div className="w-[626px] rounded-lg bg-white border-strokeborder border-[1px] border-solid box-border flex flex-row items-start justify-between pt-5 pb-4 pl-6 pr-[26px] gap-5 max-w-full text-blueviolet-200">
              <div className="h-16 w-[626px] relative rounded-lg bg-white border-strokeborder border-[1px] border-solid box-border hidden max-w-full" />
              <b className="w-[334px] relative tracking-[-0.02em] leading-[150%] inline-block shrink-0 max-w-[calc(100%_-_40px)] z-[1]">
                What Can I learn on E-Nest?
              </b>
              <img
                className="h-5 w-5 relative z-[1]"
                alt=""
                src="./images/img_contrast.svg"
              />
            </div>
            <GroupComponent
              howToEnrollInACourse="How to enroll in a course?"
              dropdownIconList="./images/img_contrast.svg"
            />
            <GroupComponent
              howToEnrollInACourse="What are the Types of course that you offer?"
              dropdownIconList="./images/img_contrast.svg"
              propWidth="447px"
              propDisplay="inline-block"
            />
            <GroupComponent
              howToEnrollInACourse="Where can i find my enrolled courses"
              dropdownIconList="./images/img_contrast.svg"
              propWidth="383px"
              propDisplay="inline-block"
            />
            <div className="self-stretch h-16 relative">
              <div className="absolute top-[22px] left-[25px] tracking-[-0.02em] leading-[150%] font-medium inline-block w-[631px] z-[1]">
                Can I download a video session or study material from the
                course?
              </div>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[626px]">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-white border-strokeborder border-[1px] border-solid box-border w-full h-full" />
                <img
                  className="absolute top-[24px] left-[583px] w-4 h-4 z-[2]"
                  alt=""
                  src="./images/img_contrast.svg"
                />
              </div>
            </div>
            <GroupComponent
              howToEnrollInACourse="Can I pay the cousres using EMI option?"
              dropdownIconList="./images/img_contrast.svg"
              propWidth="447px"
              propDisplay="inline-block"
            />
          </div>
          <div className="w-[626px] rounded-lg bg-white border-strokeborder border-[1px] border-solid box-border flex flex-row items-start justify-start py-[46px] px-[25px] gap-5 min-w-[626px] min-h-[484px] max-w-full ml-[-10px] mq750:flex-wrap mq750:min-w-full mq1100:flex-1 mq1100:min-h-[auto] mq1100:ml-0">
            <div className="h-[484px] w-[626px] relative rounded-lg bg-white border-strokeborder border-[1px] border-solid box-border hidden max-w-full" />
            <div className="h-[173px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div className="w-1.5 flex-1 relative rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-strokeborder z-[1]" />
            </div>
            <div className="flex-1 relative tracking-[-0.02em] leading-[160%] font-medium inline-block min-w-[356px] max-w-full z-[1] mq750:min-w-full">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl `}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
