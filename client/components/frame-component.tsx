import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  adobeStock1448330491?: string;
  star24?: string;
  star26?: string;
  star25?: string;
  star27?: string;
  star28?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  adobeStock1448330491,
  star24,
  star26,
  star25,
  star27,
  star28,
  propColor,
}) => {
  const bestsellerStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={`h-[401px] rounded-xl bg-white border-strokeborder border-[1px] border-solid box-border flex flex-col items-start justify-start pt-0 px-0 pb-[17px] gap-[9px] text-left text-xl text-primary-gary font-outfit ${className}`}
    >
      <div className="self-stretch h-[401px] relative rounded-xl bg-white border-strokeborder border-[1px] border-solid box-border hidden" />
      <img
        className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[1]"
        loading="lazy"
        alt=""
        src="./images/img_adobestock_461215526.png"
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
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-xs text-dark-purple">
              <div className="rounded bg-orange flex flex-row items-start justify-start py-[2.5px] px-2.5 z-[1]">
                <div
                  className="relative tracking-[-0.02em] leading-[160%] font-medium inline-block min-w-[50px]"
                  style={bestsellerStyle}
                >
                  Bestseller
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
