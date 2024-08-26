import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[18px] pl-6 pr-5 box-border relative max-w-full text-left text-base text-dimgray-100 font-inter ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src=""
      />
      <div className="w-[1270px] flex flex-row items-center justify-between max-w-full gap-5 z-[1] mq1100:flex-wrap">
        <img
          className="h-8 w-[133px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="./images/img_header_logo.svg"
        />
        <div className="w-[749px] flex flex-row items-start justify-start gap-[50px] max-w-full mq750:gap-[25px] mq750:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-2.5">
            <img
              className="h-[18px] w-[22px] relative"
              alt=""
              src="./images/img_thumbs_up.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[67px]">{`Program `}</div>
          </div>
          <div className="flex flex-row items-end justify-start gap-2.5">
            <img className="h-[18px] w-4 relative" alt="" src="./images/img_television.svg" />
            <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[84px]">
              Test Series
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-2.5">
            <img
              className="h-[18px] w-[17px] relative"
              alt=""
              src="./images/img_search.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[19px] font-semibold whitespace-pre-wrap inline-block min-w-[103px]">
              Skill Connect
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-2.5">
            <img className="h-4 w-[22px] relative" alt="" src="./images/img_settings.svg" />
            <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[117px]">
              Expert Connect
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-2.5">
            <div className="relative tracking-[-0.02em] leading-[27px] font-semibold inline-block min-w-[39px]">
              More
            </div>
            <img
              className="h-[7.4px] w-3 relative"
              alt=""
              src="./images/img_arrowdown.svg"
            />
          </div>
        </div>
        <img
          className="h-11 w-11 relative object-cover"
          loading="lazy"
          alt=""
          src="./images/img_adobestock_506887392.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
