import type { NextPage } from "next";

export type CourseCardType = {
  className?: string;
};

const CourseCard: NextPage<CourseCardType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-left text-13xl text-blueviolet-200 font-outfit mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <div className="w-[1272px] flex flex-col items-start justify-start gap-10 max-w-full mq750:gap-5">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[29px] mq750:text-7xl mq750:leading-[38px]">
            Featured Course
          </h1>
        </div>
        <div className="self-stretch rounded-2xl bg-white border-strokeborder border-[1px] border-solid box-border flex flex-row items-end justify-start gap-10 max-w-full text-xl text-primary-gary mq750:gap-5 mq1250:flex-wrap mq1250:justify-center">
          <div className="self-stretch w-[1272px] relative rounded-2xl bg-white border-strokeborder border-[1px] border-solid box-border hidden max-w-full" />
          <img
            className="w-[601px] relative rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-2xl max-h-full object-cover max-w-full z-[1] mq1250:flex-1"
            loading="lazy"
            alt=""
            src="./images/img_adobestock_566928736.png"
          />
          <div className="w-[512px] flex flex-col items-start justify-end pt-0 px-0 pb-[30px] box-border min-w-[512px] max-w-full mq750:min-w-full mq1250:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
              <div className="w-[363px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full text-9xl">
                <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[45px] font-semibold font-[inherit] inline-block max-w-full z-[1] mq450:text-3xl mq450:leading-[36px]">{`Consectetuer adipiscing `}</h2>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1 pl-[5px] pr-0 box-border max-w-full font-inter">
                <div className="flex-1 relative tracking-[-0.02em] leading-[160%] font-medium whitespace-pre-wrap inline-block max-w-full z-[1] mq450:text-base mq450:leading-[26px]">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh...  `}</div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[5px] text-dark-purple">
                <div className="relative tracking-[-0.02em] leading-[160%] font-semibold z-[1] mq450:text-base mq450:leading-[26px]">
                  Dr. Chatur ramlingam
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[5px] text-21xl">
                <div className="relative tracking-[-0.02em] leading-[160%] font-semibold inline-block min-w-[89px] whitespace-nowrap z-[1] mq450:text-5xl mq450:leading-[38px] mq750:text-13xl mq750:leading-[51px]">
                  ₹999
                </div>
              </div>
              <div className="w-[180px] flex flex-row items-start justify-start pt-0 px-[5px] pb-4 box-border">
                <div className="flex-1 flex flex-row items-start justify-start gap-3">
                  <div className="relative tracking-[-0.02em] leading-[160%] font-semibold inline-block min-w-[28px] z-[1] mq450:text-base mq450:leading-[26px]">
                    4.8
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src=""
                    />
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[9px] px-[38px] bg-gold rounded-xl flex flex-row items-start justify-start z-[1] hover:bg-darkgoldenrod">
                <div className="relative text-xl tracking-[-0.02em] leading-[160%] font-medium font-outfit text-black text-left inline-block min-w-[83px] mq450:text-base mq450:leading-[26px]">
                  Bestseller
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
