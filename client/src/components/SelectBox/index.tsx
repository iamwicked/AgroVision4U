import React from "react";
import Select, { Props } from "react-select";

type selectOptionType = { value: string; label: string };
type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    className: string;
    options: selectOptionType[];
    isSearchable: boolean;
    isMulti: boolean;
    onChange: (option: any) => void;
    value: string;
    indicator: React.ReactElement;
    getOptionLabel: (e: any) => string;
    [x: string]: any;
  }>;

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,

      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} undefined`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            indicatorsContainer: (provided: any) => ({
              ...provided,
              padding: undefined,
              flexShrink: undefined,
              width: "max-content",
              "& > div": { padding: 0 },
            }),
            container: (provided: any) => ({
              ...provided,
              zIndex: 0,
              alignItems: "center",
            }),
            control: (provided: any) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "none !important",
              minHeight: "auto",
              width: "100%",
              flexWrap: undefined,
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided: any) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided: any, state: any) => ({
              ...provided,
              display: "flex",
              minWidth: "max-content",
              width: "100%",
              backgroundColor: state.isSelected ? "#f9bb05" : "transparent",
              color: state.isSelected ? "#000000" : "inherit",
              "&:hover": {
                backgroundColor: "#f9bb05",
                color: "#000000",
              },
            }),
            singleValue: (provided: any) => ({
              ...provided,
              display: "flex",
              marginLeft: undefined,
              marginRight: undefined,
            }),
            valueContainer: (provided: any) => ({
              ...provided,
              padding: 0,
              display: "flex",
              flexWrap: undefined,
            }),
            placeholder: (provided: any) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base: any) => ({ ...base, zIndex: 999999 }),
            menu: (base: any) => ({ ...base, minWidth: "max-content", width: "max-content" }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event: Event) => {
            return (event.target as HTMLElement).id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  },
);

export { SelectBox };
