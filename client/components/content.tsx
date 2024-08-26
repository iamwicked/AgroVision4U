import type { NextPage } from "next";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-20 pl-[21px] pr-5 box-border max-w-full text-left text-9xl text-blueviolet-200 font-outfit ${className}`}
    >
      <div className="w-[1272.5px] rounded-xl bg-white flex flex-row items-start justify-start py-0 pl-[55px] pr-0 box-border gap-px max-w-full mq1100:flex-wrap mq1100:pl-5 mq1100:pr-5 mq1100:pb-5 mq1100:box-border mq1250:pl-[27px] mq1250:box-border">
        <div className="self-stretch w-[1272px] relative rounded-xl bg-white hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start pt-[51px] px-0 pb-0 box-border min-w-[478px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <h2 className="m-0 w-[198px] relative text-inherit tracking-[-0.02em] leading-[150%] font-semibold font-[inherit] inline-block z-[1] mq450:text-3xl mq450:leading-[34px]">
              Agriculture
            </h2>
            <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[150%] text-primary-gary z-[1] mq450:text-base mq450:leading-[24px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </div>
          </div>
        </div>
        <img
          className="w-[481.5px] relative max-h-full object-cover max-w-full z-[1] mq1100:flex-1"
          alt=""
          src="./images/img_mask_group.png"
        />
      </div>
    </section>
  );
};

export default Content;
