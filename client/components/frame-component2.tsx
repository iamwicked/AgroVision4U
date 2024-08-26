import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-base text-white font-outfit ${className}`}
    >
      <div className="h-[23px] w-[99px] !m-[0] absolute bottom-[27px] left-[156px]" />
      <div className="flex-1 bg-darkslateblue flex flex-row items-end justify-center pt-4 px-5 pb-[18px] box-border gap-[689px] max-w-full z-[1] mq450:gap-[86px] mq750:gap-[172px] mq1250:gap-[344px] mq1250:flex-wrap mq1250:justify-center">
        <div className="h-20 w-[1512px] relative bg-darkslateblue hidden max-w-full" />
        <div className="w-[518px] flex flex-row items-start justify-start gap-[60px] max-w-full mq450:flex-wrap mq750:gap-[30px]">
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-3">
              <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[54px] z-[2]">
                Explore
              </div>
              <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                <img
                  className="w-3 h-[7.5px] relative z-[2]"
                  alt=""
                  src="./images/img_arrowdown_white_a700.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-11xl bg-gray-200 flex flex-row items-start justify-start pt-[13px] px-4 pb-[11px] box-border gap-3 min-w-[102px] max-w-full z-[2]">
            <div className="h-[46px] w-[380px] relative rounded-11xl bg-gray-200 hidden max-w-full" />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-5 h-5 relative z-[1]"
                alt=""
                src="./images/img_search_gray_800.svg"
              />
            </div>
            <input
              className="w-[82.2px] [border:none] [outline:none] font-outfit text-sm bg-[transparent] h-[22px] relative tracking-[-0.02em] leading-[160%] text-lightslategray text-left inline-block p-0 z-[1]"
              placeholder="Type skill here"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2.5">
          <div className="flex flex-row items-start justify-start gap-3">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-5 h-5 relative z-[2]"
                alt=""
                src="./images/img_cart.svg"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[33px] z-[2]">
              Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
