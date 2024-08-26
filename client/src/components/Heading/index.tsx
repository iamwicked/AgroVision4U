import React from "react";

const sizes = {
  texts: "text-[14px] font-medium",
  textmd: "text-[16px] font-medium lg:text-[13px]",
  headingxs: "text-[12px] font-semibold",
  headings: "text-[14px] font-semibold",
  headingmd: "text-[16px] font-semibold lg:text-[13px]",
  headinglg: "text-[18px] font-semibold lg:text-[15px]",
  headingxl: "text-[20px] font-semibold lg:text-[17px]",
  heading2xl: "text-[28px] font-semibold lg:text-[23px] md:text-[26px] sm:text-[24px]",
  heading3xl: "text-[32px] font-semibold lg:text-[27px] md:text-[30px] sm:text-[28px]",
  heading4xl: "text-[40px] font-semibold lg:text-[34px] md:text-[38px] sm:text-[36px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "textmd",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-800 font-outfit ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
