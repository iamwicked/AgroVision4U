import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-white flex flex-row items-start justify-center flex-wrap content-start pt-[50px] pb-[39.8px] pl-[120px] pr-[119px] box-border gap-44 max-w-full text-left text-9xl text-white font-outfit mq450:gap-11 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[88px] mq750:pt-8 mq750:pb-[26px] mq750:pl-[60px] mq750:pr-[59px] mq750:box-border ${className}`}
    >
      <div className="h-[500px] w-[1512px] relative bg-white hidden max-w-full" />
      <div className="flex flex-col items-start justify-start gap-11">
        <div className="w-[126px] flex flex-col items-end justify-start gap-5 font-inter">
          <div className="flex flex-col items-start justify-start gap-3">
            <div className="flex flex-row items-start justify-start py-0 px-[26px]">
              <img
                className="h-30 w-[150px] relative z-[1]"
                loading="lazy"
                alt=""
                src="./images/img_footer_logo.png"
              />
            </div>
            <h2 className="m-0 relative text-inherit leading-[34px] font-semibold font-[inherit] inline-block min-w-[116px] z-[1] mq450:text-3xl mq450:leading-[27px]">
              <span className="tracking-[0.04em]">E-</span>
              <span className="tracking-[0.01em]">NEST</span>
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[3px] text-center text-sm text-primary-gary font-outfit">
            <div className="flex-1 relative tracking-[-0.02em] leading-[119%] font-medium z-[1]">
              Empowering Agri and food technology
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3 text-base text-primary-gary">
          <div className="relative text-xl tracking-[-0.02em] leading-[150%] font-semibold text-dark-purple z-[1] mq450:text-base mq450:leading-[24px]">
            Contact with us
          </div>
          <div className="relative tracking-[0.02em] leading-[26px] font-medium inline-block min-w-[42px] z-[1]">
            Email
          </div>
          <div className="relative tracking-[0.02em] leading-[26px] font-medium z-[1]">
            Talk to A Councellor
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3.5 text-right text-xl text-dark-purple">
          <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[72px] z-[1] mq450:text-base mq450:leading-[24px]">
            Address
          </div>
          <div className="flex flex-row items-start justify-start gap-2 text-base text-primary-gary">            
            <div className="relative tracking-[-0.02em] leading-[150%] font-medium inline-block min-w-[82px] z-[1]">
              Address link
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-end justify-start gap-[98px] min-w-[617px] max-w-full text-center text-base text-primary-gary mq750:gap-6 mq1100:gap-[49px] mq1100:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px box-border max-w-full">
          <div className="h-[223px] flex-1 relative max-w-full mq750:h-auto mq750:min-h-[223]">
            <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[9px] max-w-full text-left text-xl text-dark-purple">
              <div className="self-stretch flex flex-row items-start justify-between gap-5 mq750:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[91px] z-[1] mq450:text-base mq450:leading-[24px]">
                    Quick Link
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-[26px] text-center">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[85px] z-[1] mq450:text-base mq450:leading-[24px]">
                    Company
                  </div>
                </div>
                <div className="w-[130px] flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-5 box-border font-inter">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[79px] z-[1] mq450:text-base mq450:leading-[24px]">
                    Security
                  </div>
                </div>
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[112px] z-[1] mq450:text-base mq450:leading-[24px]">{`Incubated by `}</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-5 text-center text-base text-primary-gary mq750:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-[25px]">
                  <div className="flex flex-col items-start justify-start gap-3">
                    <div className="relative tracking-[0.02em] leading-[26px] font-medium inline-block min-w-[66px] z-[1]">
                      Program
                    </div>
                    <div className="relative tracking-[0.02em] leading-[26px] font-medium inline-block min-w-[78px] z-[1]">
                      Test series
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-3.5">
                  <div className="flex flex-col items-start justify-start gap-3">
                    <div className="relative tracking-[0.02em] leading-[26px] font-medium inline-block min-w-[65px] z-[1]">
                      About us
                    </div>
                    <div className="relative tracking-[0.02em] leading-[26px] font-medium inline-block min-w-[109px] z-[1]">
                      Why choose us
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-left">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="relative tracking-[0.02em] leading-[26px] font-medium inline-block min-w-[53px] z-[1]">{`Report `}</div>
                    <div className="relative tracking-[0.02em] leading-[26px] font-medium z-[1]">
                      Trademark Notice
                    </div>
                  </div>
                </div>
                <img
                  className="h-[52px] w-28 relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="./images/img_msme_registration_500x500.png"
                />
              </div>
            </div>
            <div className="absolute top-[121px] left-[0px] w-full flex flex-row items-start justify-between gap-5 max-w-full mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-3">
                <div className="relative tracking-[0.02em] leading-[26px] font-medium inline-block min-w-[95px] z-[1]">
                  Skill Connect
                </div>
                <div className="relative tracking-[0.02em] leading-[26px] font-medium inline-block min-w-[116px] z-[1]">
                  Expert Connect
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[33px] gap-3">
                <div className="relative tracking-[0.02em] leading-[26px] font-medium inline-block min-w-[56px] z-[1]">
                  Policies
                </div>
                <div className="relative tracking-[0.02em] leading-[26px] font-medium inline-block min-w-[103px] z-[1]">
                  Privacy Policy
                </div>
              </div>
              <div className="w-[156px] flex flex-col items-start justify-start pt-[7px] pb-0 pl-0 pr-[15px] box-border text-left">
                <div className="self-stretch flex flex-col items-start justify-start gap-4">
                  <div className="self-stretch relative tracking-[0.02em] leading-[26px] font-medium z-[1]">
                    Advertise with us
                  </div>
                  <div className="h-[30px] relative tracking-[0.02em] leading-[160%] font-medium inline-block shrink-0 min-w-[120px] z-[1]">{`Help & Support`}</div>
                </div>
              </div>
              <div className="h-[71px] w-28 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="./images/img_iima_logo_2.png"
                />
              </div>
            </div>
            <div className="absolute top-[197px] left-[0px] tracking-[0.02em] leading-[26px] font-medium inline-block min-w-[102px] z-[1]">
              Study Abroad
            </div>
          </div>
        </div>
        <div className="w-[840px] flex flex-col items-start justify-start gap-[3px] max-w-full text-left text-xl text-black">
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[15px]">
            <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block min-w-[127px] z-[1] mq450:text-base mq450:leading-[24px]">{`Lets get social: `}</div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-5 mq750:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-5 max-w-full mq750:flex-wrap">
              <img
                className="h-[54.9px] w-[191px] relative z-[1]"
                loading="lazy"
                alt=""
                src="./images/img_group_35450.png"
              />
              <img
                className="self-stretch w-[196px] relative max-h-full min-h-[56px] z-[1]"
                loading="lazy"
                alt=""
                src="./images/img_appstore.png"
              />
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5.2px]">
              <div className="flex flex-row items-start justify-start gap-3">
                <img
                  className="h-[30px] w-[30px] relative object-cover min-h-[30px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="./images/img_image_225.png"
                />
                <img
                  className="h-[30px] w-[30px] relative object-cover min-h-[30px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="./images/img_image_224.png"
                />
                <img
                  className="h-[30px] w-[30px] relative object-cover min-h-[30px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="./images/img_image_227.png"
                />
                <img
                  className="h-[30px] w-[30px] relative object-cover min-h-[30px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="./images/img_image_228.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
