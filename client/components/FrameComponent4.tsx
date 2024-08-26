import React from "react";

interface FrameComponentProps {
  adobeStockImage: string;
  rating: number;
  isBestseller?: boolean;
}

const FrameComponent: React.FC<FrameComponentProps> = ({
  adobeStockImage,
  rating,
  isBestseller = false,
}) => {
  return (
    <div className="h-[401px] relative">
      <div className="absolute inset-0 rounded-xl bg-white border-[1px] border-solid border-strokeborder box-border flex flex-col items-start gap-[9px] pb-[17px]">
        <img
          className="self-stretch flex-1 relative rounded-t-xl object-cover max-w-full max-h-full z-[1]"
          alt="Course Image"
          src={adobeStockImage}
        />
        <div className="px-[15px] pr-[17px]">
          <div className="flex-1 relative font-semibold tracking-[-0.02em] leading-[160%] z-[1]">
            Example Course Title
          </div>
        </div>
        <div className="px-[15px] text-sm text-dimgray-200">
          <div className="flex-1 relative font-medium tracking-[-0.02em] leading-[160%] z-[1]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </div>
        </div>
        <div className="px-[15px] pr-[17px] text-xs text-gray-100">
          <div className="flex flex-col gap-1">
            <div className="relative font-semibold tracking-[-0.02em] leading-[160%] z-[1]">
              Instructor Name
            </div>
            <div className="relative text-xl tracking-[-0.02em] leading-[160%] font-semibold z-[1]">
              ₹999
            </div>
            <div className="flex justify-between gap-5 text-sm">
              <div className="flex items-start gap-0.5">
                <div className="relative font-semibold tracking-[-0.02em] leading-[160%] z-[1]">
                  {rating}
                </div>
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    className="w-4 h-4 relative z-[1] rounded-12xs"
                    alt={`Star ${index + 1}`}
                    src="./images/star.png"
                  />
                ))}
              </div>
              {isBestseller && (
                <div className="flex items-start text-xs text-dark-purple">
                  <div className="rounded bg-orange flex items-start py-[2.5px] px-2.5 z-[1]">
                    <div className="relative font-medium tracking-[-0.02em] leading-[160%] min-w-[50px]">
                      Bestseller
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
