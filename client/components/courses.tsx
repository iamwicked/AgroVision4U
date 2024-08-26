import type { NextPage } from "next";
import FrameComponent from "./frame-component";

export type CoursesType = {
  className?: string;
  name: string;
  price: string;
  rating: number;
};

interface StarRatingProps {
  rating: number;
  maxStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars }) => (
  <div className="w-28 flex flex-row items-start justify-start gap-0.5">
    {[...Array(maxStars)].map((_, index) => (
      <img
        key={index}
        className="w-4 h-4 relative rounded-12xs z-[1]"
        loading="lazy"
        alt=""
        src="./images/star.png"
      />
    ))}
  </div>
);



const Courses: NextPage<CoursesType> = ({ className = "", name, price, rating }) => {
  return (
    <section
      className={`w-[1443px] flex flex-row items-start justify-end pt-0 px-[51px] pb-[111px] box-border max-w-full text-left text-13xl text-blueviolet-200 font-outfit mq750:pb-[47px] mq750:box-border mq1250:pl-[25px] mq1250:pr-[25px] mq1250:pb-[72px] mq1250:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[39px] max-w-full mq750:gap-[19px]">
        <div className="w-[1273px] flex flex-row items-start justify-center pt-0 px-5 pb-[11px] box-border max-w-full">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[29px] mq750:text-7xl mq750:leading-[38px]">
            Explore all courses of Agriculture
          </h1>
        </div>
        <div className="w-[1270px] flex flex-col items-start justify-start gap-[11px] max-w-full text-lg text-dimgray-200">
          <div className="w-[559px] flex flex-row items-start justify-start py-0 px-11 box-border max-w-full mq750:pl-[22px] mq750:pr-[22px] mq750:box-border">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
              <div className="relative tracking-[-0.02em] leading-[150%] font-semibold text-blueviolet-200 inline-block min-w-[21px]">
                All
              </div>
              <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[104px]">
                Most Popular
              </div>
              <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[36px]">
                New
              </div>
              <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[70px]">
                Trending
              </div>
            </div>
          </div>
          <div className="self-stretch h-[9px] relative">
            <div className="absolute top-[8px] left-[0px] border-strokeborder border-t-[1px] border-solid box-border w-[1271px] h-px" />
            <div className="absolute top-[0px] left-[15px] rounded-t-lg rounded-b-none bg-blueviolet-200 w-20 h-2 z-[1]" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-3.5 max-w-full text-xl text-primary-gary">
          <div className="h-[932px] w-[309px] flex flex-col items-start justify-start gap-10 mq450:gap-5 mq1100:hidden">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-1.5">
              <div className="flex-1 flex flex-row items-start justify-start gap-5">
                <button className="cursor-pointer [border:none] py-3 px-[25px] bg-blueviolet-200 flex-1 rounded-6xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-blueviolet-100">
                  <div className="relative text-base tracking-[-0.02em] leading-[26px] font-medium font-outfit text-white text-left inline-block min-w-[92px]">{`Consectetuer `}</div>
                </button>
                <button className="cursor-pointer border-dimgray-200 border-[1px] border-solid py-2.5 px-6 bg-[transparent] flex-1 rounded-6xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-slategray-200 hover:border-slategray-100 hover:border-[1px] hover:border-solid hover:box-border">
                  <div className="relative text-base tracking-[-0.02em] leading-[26px] font-medium font-outfit text-dimgray-200 text-left inline-block min-w-[88px]">{`Lorem ipsum `}</div>
                </button>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-px pr-[5px]">
              <div className="self-stretch flex-1 rounded-xl bg-white border-strokeborder border-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-[17px] gap-[9px]">
                <div className="self-stretch h-[401px] relative rounded-xl bg-white border-strokeborder border-[1px] border-solid box-border hidden" />
                <img
                  className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="./images/img_adobestock_144833049.png"
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
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-[17px] text-xs">
                      <div className="flex-1 flex flex-col items-start justify-start gap-0.5">
                        <div className="relative tracking-[-0.02em] leading-[20px] text-gray-100 inline-block min-w-[113px] z-[1]">
                          {name}
                        </div>
                        <div className="relative text-xl tracking-[-0.02em] leading-[160%] font-semibold inline-block min-w-[45px] whitespace-nowrap z-[1]">
                          {price}
                        </div>
                        <div className="self-stretch flex flex-row items-end justify-between gap-5 text-sm">
                          <StarRating rating={rating} maxStars={5} />
                          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-xs text-dark-purple">
                            <div className="rounded bg-orange flex flex-row items-start justify-start py-[2.5px] px-2.5 z-[1]">
                              <div className="relative tracking-[-0.02em] leading-[160%] font-medium inline-block min-w-[50px]">
                                Bestseller
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[401px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-white border-strokeborder border-[1px] border-solid box-border w-full h-full flex flex-col items-start justify-start pt-0 px-0 pb-[17px] gap-[9px]">
                <div className="self-stretch h-[401px] relative rounded-xl bg-white border-strokeborder border-[1px] border-solid box-border hidden z-[0]" />
                <img
                  className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="./images/img_adobestock_144833049.png"
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
                          <div className="relative tracking-[-0.02em] leading-[160%] font-medium inline-block min-w-[50px]">
                            Bestseller
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[11px] h-3 absolute !m-[0] top-[24px] right-[-17px] rounded-[50%] bg-darkmagenta [transform:_rotate(90deg)] [transform-origin:0_0] z-[2]" />
              </div>
              <div className="absolute top-[30px] left-[158px] w-[151px] h-[36.6px] text-xs text-white">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                  loading="lazy"
                  alt=""
                  src="./images/img_group_22.png"
                />
                <div className="absolute top-[12px] left-[17px] tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[120px] z-[4]">
                  Internship Opportunity!
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-10 max-w-[calc(100%_-_323px)] mq750:gap-5 mq1100:max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-5">
              <button className="cursor-pointer border-dimgray-200 border-[1px] border-solid py-2.5 px-6 bg-[transparent] flex-1 rounded-6xl box-border flex flex-row items-start justify-start min-w-[115px] whitespace-nowrap hover:bg-slategray-200 hover:border-slategray-100 hover:border-[1px] hover:border-solid hover:box-border">
                <div className="relative text-base tracking-[-0.02em] leading-[26px] font-medium font-outfit text-dimgray-200 text-left inline-block min-w-[127px]">
                  Lorem ipsum dolor
                </div>
              </button>
              <button className="cursor-pointer border-dimgray-200 border-[1px] border-solid py-2.5 px-6 bg-[transparent] rounded-6xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-slategray-200 hover:border-slategray-100 hover:border-[1px] hover:border-solid hover:box-border">
                <div className="relative text-base tracking-[-0.02em] leading-[26px] font-medium font-outfit text-dimgray-200 text-left inline-block min-w-[92px]">{`Consectetuer `}</div>
              </button>
              <button className="cursor-pointer border-dimgray-200 border-[1px] border-solid py-2.5 px-6 bg-[transparent] rounded-6xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-slategray-200 hover:border-slategray-100 hover:border-[1px] hover:border-solid hover:box-border">
                <div className="relative text-base tracking-[-0.02em] leading-[26px] font-medium font-outfit text-dimgray-200 text-left inline-block min-w-[88px]">{`Lorem ipsum `}</div>
              </button>
              <button className="cursor-pointer border-dimgray-200 border-[1px] border-solid py-2.5 px-6 bg-[transparent] flex-1 rounded-6xl box-border flex flex-row items-start justify-start min-w-[115px] whitespace-nowrap hover:bg-slategray-200 hover:border-slategray-100 hover:border-[1px] hover:border-solid hover:box-border">
                <div className="relative text-base tracking-[-0.02em] leading-[26px] font-medium font-outfit text-dimgray-200 text-left inline-block min-w-[127px]">
                  Lorem ipsum dolor
                </div>
              </button>
              <button className="cursor-pointer border-dimgray-200 border-[1px] border-solid py-2.5 px-6 bg-[transparent] rounded-6xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-slategray-200 hover:border-slategray-100 hover:border-[1px] hover:border-solid hover:box-border">
                <div className="relative text-base tracking-[-0.02em] leading-[26px] font-medium font-outfit text-dimgray-200 text-left inline-block min-w-[92px]">{`Consectetuer `}</div>
              </button>
              <button className="cursor-pointer border-dimgray-200 border-[1px] border-solid py-2.5 px-6 bg-[transparent] rounded-6xl flex flex-row items-start justify-start relative gap-2.5 whitespace-nowrap hover:bg-slategray-200 hover:border-slategray-100 hover:border-[1px] hover:border-solid hover:box-border">
                <div className="relative text-base tracking-[-0.02em] leading-[26px] font-medium font-outfit text-dimgray-200 text-left inline-block min-w-[92px]">{`Consectetuer `}</div>
              </button>
            </div>
            <div className="w-[950px] flex flex-col items-start gap-10 max-w-full mq750:gap-5">
              <div className="flex flex-row items-start justify-start py-0 pl-px pr-0 max-w-full box-border">
                <div className="flex-1 grid grid-cols-[repeat(3,_minmax(231px,_1fr))] gap-[15px] max-w-full mq750:grid-cols-[minmax(231px,_1fr)] mq1100:grid-cols-[repeat(2,_minmax(231px,_400px))] mq1100:justify-center">

                  {/* Card Component */}
                  <div className="h-[401px] relative">
                    <div className="absolute inset-0 rounded-xl bg-white border-[1px] border-solid border-strokeborder box-border flex flex-col items-start gap-[9px] pb-[17px]">
                      <img
                        className="self-stretch flex-1 relative rounded-t-xl object-cover max-w-full max-h-full z-[1]"
                        alt=""
                        src="./images/img_adobestock_144833049.png"
                      />
                      <div className="px-[15px] pr-[17px]">
                        <div className="flex-1 relative font-semibold tracking-[-0.02em] leading-[160%] z-[1] mq450:text-base mq450:leading-[26px]">
                          consectetuer adipiscing elit,
                        </div>
                      </div>
                      <div className="px-[15px] text-sm text-dimgray-200">
                        <div className="flex-1 relative font-medium tracking-[-0.02em] leading-[160%] z-[1]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
                        </div>
                      </div>
                      <div className="px-[15px] pr-[17px] text-xs text-gray-100">
                        <div className="flex flex-col gap-1">
                          <div className="relative font-semibold tracking-[-0.02em] leading-[160%] z-[1]">Dr. Chatur ramlingam</div>
                          <div className="relative text-xl tracking-[-0.02em] leading-[160%] font-semibold z-[1] mq450:text-base mq450:leading-[26px]">₹999</div>
                          <div className="flex justify-between gap-5 text-sm">
                            <div className="flex items-start gap-0.5">
                              <div className="relative font-semibold tracking-[-0.02em] leading-[160%] z-[1]">4.8</div>
                              {[...Array(5)].map((_, index) => (
                                <img
                                  key={index}
                                  className="w-4 h-4 relative z-[1] rounded-12xs"
                                  alt=""
                                  src="./images/star.png"
                                />
                              ))}
                            </div>
                            <div className="flex items-start text-xs text-dark-purple">
                              <div className="rounded bg-orange flex items-start py-[2.5px] px-2.5 z-[1]">
                                <div className="relative font-medium tracking-[-0.02em] leading-[160%] min-w-[50px]">Bestseller</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Frame Component */}
                  <FrameComponent
                    adobeStock1448330491="./images/img_adobestock_99586952.png"
                    star24="./images/star.png"
                    star26="./images/star.png"
                    star25="./images/star.png"
                    star27="./images/star.png"
                    star28="./images/star.png"
                  />
                  <FrameComponent
                    adobeStock1448330491="./images/img_adobestock_99586952.png"
                    star24="./images/star.png"
                    star26="./images/star.png"
                    star25="./images/star.png"
                    star27="./images/star.png"
                    star28="./images/star.png"
                  />
                </div>
              </div>

              <div className="grid grid-cols-[repeat(3,_minmax(227px,_1fr))] gap-5 mq750:grid-cols-[minmax(227px,_1fr)] mq1100:grid-cols-[repeat(2,_minmax(227px,_394px))] mq1100:justify-center">
                {["./images/img_adobestock_99586952.png", "./images/img_adobestock_99586952.png", "./images/img_adobestock_99586952.png"].map((src, index) => (
                  <FrameComponent
                    key={index}
                    adobeStock1448330491={src}
                    star24="./images/star.png"
                    star26="./images/star.png"
                    star25="./images/star.png"
                    star27="./images/star.png"
                    star28="./images/star.png"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
