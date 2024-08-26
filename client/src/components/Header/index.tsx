import { CloseSVG } from "../Input/close";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { Input } from "../Input";
import { SelectBox } from "../SelectBox";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props}>
      <div className="self-stretch">
        <div className="flex justify-center bg-white-a700 py-[18px]">
          <div className="container-xs flex items-center justify-between gap-5 lg:px-5 md:flex-row md:px-5">
            <Img
              src="images/img_header_logo.svg"
              alt="Headerlogo"
              className="h-[32px] w-[132px] object-contain"
            />
            <div className="flex w-[58%] items-center justify-center gap-[50px] md:w-full md:flex-row">
              <div className="flex items-center gap-2.5">
                <button>
                  <Img src="images/img_thumbs_up.svg" alt="Thumbsup" className="h-[18px]" />
                </button>
                <Heading
                  size="headingmd"
                  as="h6"
                  className="!font-inter tracking-[-0.32px] !text-gray-600"
                >
                  Program{" "}
                </Heading>
              </div>
              <div className="flex items-center gap-2.5 self-start md:self-auto">
                <button>
                  <Img src="images/img_television.svg" alt="Television" className="h-[18px] self-end" />
                </button>
                <Heading
                  size="headingmd"
                  as="h6"
                  className="!font-inter tracking-[-0.35px] !text-gray-600"
                >
                  Test Series
                </Heading>
              </div>
              <div className="flex items-center gap-2.5">
                <button>
                  <Img src="images/img_search.svg" alt="Search" className="h-[18px] self-start" />
                </button>
                <Heading
                  size="headingmd"
                  as="h6"
                  className="!font-inter tracking-[-0.35px] !text-gray-600"
                >
                  Skill Connect
                </Heading>
              </div>
              <div className="flex flex-1 items-center justify-center gap-2.5 md:self-stretch">
                <button>
                  <Img src="images/img_settings.svg" alt="Settings" className="h-[16px]" />
                </button>
                <Heading
                  size="headingmd"
                  as="h6"
                  className="!font-inter tracking-[-0.35px] !text-gray-600"
                >
                  Expert Connect
                </Heading>
              </div>
              <SelectBox
                indicator={<Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[8px] w-[12px]" />}
                name="arrowdown"
                placeholder={`More`}
                options={dropDownOptions}
                className="flex w-[10%] gap-2.5 p-3 font-inter text-[16px] font-semibold tracking-[-0.35px] text-gray-600 md:w-full"
              />
            </div>
            <button>
              <Img
                src="images/img_adobestock_506887392.png"
                alt="Adobestock"
                className="h-[44px] w-[44px] rounded-[22px] object-cover md:w-full"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch">
        <div className="flex justify-center bg-purple-900 py-4">
          <div className="container-xs flex items-center justify-between gap-5 lg:px-5 md:flex-row md:px-5">
            <SelectBox
              indicator={
                <Img src="images/img_arrowdown_white_a700.svg" alt="Arrow Down" className="h-[8px] w-[12px]" />
              }
              name="arrowdown_one"
              placeholder={`Explore`}
              options={dropDownOptions}
              className="flex w-[6%] gap-2.5 p-3 text-[16px] font-semibold tracking-[-0.35px] text-white-a700 md:w-full"
            />
            <div className="flex w-[88%] items-center justify-between gap-5 md:w-full sm:flex-row">
              <Input
                name="search"
                placeholder={`Type skill here`}
                value={searchBarValue}
                onChange={(e) => setSearchBarValue(e.target.value)}
                prefix={
                  <div className="flex h-[20px] w-[20px] items-center justify-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <Img src="images/img_search_gray_800.svg" alt="Search" className="h-[20px] w-[20px]" />
                  </div>
                }
                suffix={searchBarValue?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue("")} /> : null}
                className="flex h-[46px] w-[34%] items-center justify-center gap-3 rounded-[22px] bg-white-a700_f7 px-3.5 text-[14px] tracking-[-0.31px] text-blue_gray-400 sm:w-full"
              />

              <div className="flex items-center gap-3">
                <button>
                  <Img src="images/img_cart.svg" alt="Cart" className="h-[20px] w-[20px] self-end" />
                </button>
                <Heading
                  size="headingmd"
                  as="h6"
                  className="tracking-[-0.35px] !text-white-a700"
                >
                  Cart
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
