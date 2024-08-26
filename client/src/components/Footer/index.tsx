import { Heading } from "../Heading";
import { Img } from "../Img";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props} className={`${props.className} flex flex-col`}>
      <div className="self-stretch">
        <div className="flex justify-center bg-white-a700 py-[38px] sm:py-4">
          <div className="container-xs mt-2.5 flex justify-center lg:px-5 md:px-5">
            <div className="w-full">
              <div>
                <div className="flex items-start justify-between gap-5 md:flex-row">
                  <div className="flex w-[78%] items-start justify-center self-center md:w-full md:flex-row">
                    <div className="flex w-[32%] flex-col gap-[46px] self-center md:w-full">
                      <div className="flex w-[38%] flex-col items-center gap-4 lg:w-full md:w-full">
                        <Img
                          src="images/img_footer_logo.png"
                          alt="Footerlogo"
                          className="h-[88px] w-[108px] object-contain"
                        />
                        <Heading
                          size="texts"
                          as="p"
                          className="self-stretch text-center leading-[119%] tracking-[-0.31px]"
                        >
                          Empowering Agri and food technology
                        </Heading>
                      </div>
                      <div className="flex flex-col items-start gap-3">
                        <Heading size="headingxl" as="h5" className="tracking-[-0.44px] !text-gray-900">
                          Contact with us
                        </Heading>
                        <ul className="flex flex-col items-start">
                          <li>
                            <a href="Email" target="_blank" rel="noreferrer">
                              <Heading as="p" className="tracking-[0.32px]">
                                Email
                              </Heading>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="mt-3.5">
                              <Heading as="p" className="tracking-[0.32px]">
                                Talk to A Councellor
                              </Heading>
                            </a>
                          </li>
                          <li>
                            <a href="Address" target="_blank" rel="noreferrer" className="mt-[42px]">
                              <Heading size="headingxl" as="h5" className="tracking-[-0.44px] !text-gray-900">
                                Address
                              </Heading>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="mt-3.5 flex items-center gap-2">
                                <Img src="images/img_linkedin.svg" alt="Linkedin" className="h-[16px]" />
                                <Heading as="p" className="tracking-[-0.35px]">
                                  Address link
                                </Heading>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex w-[68%] items-start justify-between gap-5 md:w-full md:flex-row">
                      <div className="flex w-[38%] flex-col items-start gap-2.5 self-center md:w-full">
                        <Heading size="headingxl" as="h5" className="tracking-[-0.44px] !text-gray-900">
                          Quick Link
                        </Heading>
                        <ul className="flex flex-col items-start">
                          <li>
                            <a href="Program" target="_blank" rel="noreferrer">
                              <Heading as="p" className="tracking-[0.32px]">
                                Program
                              </Heading>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Heading as="p" className="tracking-[0.32px]">
                                Test series
                              </Heading>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Heading as="p" className="tracking-[0.32px]">
                                Skill Connect
                              </Heading>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Heading as="p" className="tracking-[0.32px]">
                                Expert Connect
                              </Heading>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Heading as="p" className="tracking-[0.32px]">
                                Study Abroad
                              </Heading>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex w-[42%] flex-col items-start gap-2.5 md:w-full">
                        <Heading size="headingxl" as="h5" className="tracking-[-0.44px] !text-gray-900">
                          Company
                        </Heading>
                        <ul className="flex flex-col items-start">
                          <li>
                            <a href="#">
                              <Heading as="p" className="tracking-[0.32px]">
                                About us
                              </Heading>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Heading as="p" className="tracking-[0.32px]">
                                Why choose us
                              </Heading>
                            </a>
                          </li>
                          <li>
                            <a href="Policies" target="_blank" rel="noreferrer">
                              <Heading as="p" className="tracking-[0.32px]">
                                Policies
                              </Heading>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Heading as="p" className="tracking-[0.32px]">
                                Privacy Policy
                              </Heading>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-start gap-2.5">
                        <Heading size="headingxl" as="h5" className="!font-inter tracking-[-0.44px] !text-gray-900">
                          Security
                        </Heading>
                        <ul className="flex flex-col items-start">
                          <li>
                            <a href="#">
                              <Heading as="p" className="tracking-[0.32px]">
                                Report{" "}
                              </Heading>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Heading as="p" className="tracking-[0.32px]">
                                Trademark Notice
                              </Heading>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Heading as="p" className="tracking-[0.32px]">
                                Advertise with us
                              </Heading>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Heading as="p" className="tracking-[0.32px]">
                                Help & Support
                              </Heading>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[8%] flex-col gap-[42px] md:w-full">
                    <div className="flex flex-col items-center gap-2.5">
                      <Heading size="headingxl" as="h5" className="tracking-[-0.44px] !text-gray-900">
                        Incubated by{" "}
                      </Heading>
                      <Img
                        src="images/img_msme_registration_500x500.png"
                        alt="Msme"
                        className="h-[52px] w-full object-cover lg:h-auto md:h-auto"
                      />
                    </div>
                    <Img src="images/img_iima_logo_2.png" alt="Iimalogotwo" className="h-[54px] object-cover" />
                  </div>
                </div>
              </div>
              <div className="relative mt-[-78px] flex items-center justify-end gap-[278px] md:flex-col md:gap-5">
                <div className="flex items-center gap-5 self-end md:self-auto sm:flex-col">
                  <a href="#">
                  </a>
                  <a href="#">
                    <Img
                      src="images/img_group_35450.png"
                      alt="Image"
                      className="h-[30%] w-[30%] rounded-[8px] object-contain"
                    />
                  </a>
                </div>
                <div className="mb-1 flex w-[16%] flex-col items-center gap-[22px] md:mb-0 md:w-full">
                  <Heading size="headingxl" as="h5" className="tracking-[-0.44px] !text-black-900">
                    Lets get social:{" "}
                  </Heading>
                  <div className="flex justify-center gap-3 self-stretch">
                    <Img src="images/img_image_225.png" alt="Image225" className="h-[30px] w-[30px] object-cover" />
                    <Img src="images/img_image_224.png" alt="Image224" className="h-[30px] w-[30px] object-cover" />
                    <Img src="images/img_image_227.png" alt="Image227" className="h-[30px] w-[30px] object-cover" />
                    <Img src="images/img_image_228.png" alt="Image228" className="h-[30px] w-[30px] object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch">
        <div className="flex justify-center bg-blue_gray-900 py-[18px]">
          <div className="container-xs flex justify-center px-14 lg:px-5 md:px-5">
            <div className="flex w-[24%] justify-center gap-0.5 lg:w-full md:w-full">
              <Heading as="p" className="!font-normal tracking-[-0.35px] !text-white-a700">
                Copyrights
              </Heading>
              <div className="flex w-[18px] flex-col items-center justify-center rounded-lg border-[1.4px] border-solid border-white-a700">
                <Heading as="p" className="tracking-[-0.35px] !text-white-a700">
                  c
                </Heading>
              </div>
              <Heading as="p" className="!font-normal tracking-[-0.35px] !text-white-a700">
                AgriVision4U Pvt. Ltd. 2024
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
