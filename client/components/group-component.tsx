import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  howToEnrollInACourse?: string;
  dropdownIconList?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  howToEnrollInACourse,
  dropdownIconList,
  propWidth,
  propDisplay,
}) => {
  const howToEnrollStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div
      className={`w-[626px] rounded-lg bg-white border-strokeborder border-[1px] border-solid box-border flex flex-row items-start justify-between pt-5 pb-4 pl-[25px] pr-[27px] gap-5 max-w-full text-left text-base text-primary-gary font-inter ${className}`}
    >
      <div className="h-16 w-[626px] relative rounded-lg bg-white border-strokeborder border-[1px] border-solid box-border hidden max-w-full" />
      <div
        className="relative tracking-[-0.02em] leading-[150%] font-medium z-[1]"
        style={howToEnrollStyle}
      >
        {howToEnrollInACourse}
      </div>
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <img className="w-4 h-4 relative z-[1]" alt="" src={dropdownIconList} />
      </div>
    </div>
  );
};

export default GroupComponent;
