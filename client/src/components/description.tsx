import { Heading } from "./Heading";
import { Img } from "./Img";
import { Text } from "./Text";
import React from "react";

export default function Description() {
  return (
    <div className="flex justify-center pt-10 ">
      <div className="container-xs flex justify-center lg:px-5 md:px-5">
        <div className="flex w-3/4 items-center justify-center rounded-[20px] bg-white-a700 md:flex-row">
          <div className="flex w-[58%] flex-col items-start gap-4 md:w-full md:px-5">
            <Heading size="heading2xl" as="h1" className="tracking-[-0.62px] !text-purple-700 md:text-[22px]">
              Agriculture
            </Heading>
            <Text size="textlg" as="p" className="w-full leading-[150%] tracking-[-0.44px] !text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
            </Text>
          </div>
          <Img src="images/img_mask_group.png" alt="Image" className="h-[260px] w-[38%] object-contain " />
        </div>
      </div>
    </div>
  );
}

export { Description };
