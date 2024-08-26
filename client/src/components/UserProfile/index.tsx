import { Button } from "../Button";
import { RatingBar } from "../RatingBar";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Img } from "../Img";import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  headingText?: React.ReactNode;
  descriptionText?: React.ReactNode;
  authorName?: React.ReactNode;
  price?: React.ReactNode;
  ratingText?: React.ReactNode;
  bestsellerLabel?: string;
}

export default function UserProfile({
  userImage = "images/img_adobestock_210537950.png",
  headingText = "consectetuer adipiscing elit,",
  descriptionText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh...  ",
  authorName = "Dr. Chatur ramlingam",
  price = "₹999",
  ratingText = "4.8",
  bestsellerLabel = "Bestseller",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full gap-3`}>
      <Img src={userImage} alt="Image" className="h-[200px] w-full rounded-tl-[20px] rounded-tr-[20px] object-cover" />
      <div className="mx-3.5 mb-4 flex flex-col items-start self-stretch">
        <Heading size="headingxl" as="h5" className="tracking-[-0.44px]">
          {headingText}
        </Heading>
        <Heading size="texts" as="p" className="mt-2 w-full leading-[160%] tracking-[-0.31px] !text-gray-600_01">
          {descriptionText}
        </Heading>
        <Text as="p" className="mt-2.5 tracking-[-0.26px]">
          {authorName}
        </Text>
        <Heading size="headingxl" as="h5" className="tracking-[-0.44px]">
          {price}
        </Heading>
        <div className="flex items-center self-stretch">
          <div className="flex flex-1 items-center gap-1.5 self-end">
            <Heading size="headings" as="p" className="tracking-[-0.31px]">
              {ratingText}
            </Heading>
            <RatingBar
              value={5}
              isEditable={true}
              color="#791cc4"
              activeColor="#791cc4"
              size={16}
              className="flex gap-2.5 self-start"
            />
          </div>
          <Button className="flex h-[24px] min-w-[70px] flex-row items-center justify-center rounded bg-amber-500 px-2.5 text-center text-[12px] font-medium tracking-[-0.26px] text-gray-900">
            {bestsellerLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
