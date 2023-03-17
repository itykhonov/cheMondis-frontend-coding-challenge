import React, { FC } from 'react';
import Select, { OnChangeValue } from 'react-select';

export interface IOption {
  label: number;
  value: number;
}

export interface IProps {
  value?: number;
  setValue: (value: number) => void;
  options: IOption[];
  placeholder?: string;
}

export const SelectComponent: FC<IProps> = ({
  value,
  setValue,
  options,
  placeholder
}: IProps) => {
  const selectedValue =
    options.length === 1
      ? options[0]
      : options.find((o) => o.value === value) || null;
  const onChangeFilter = (selectedOption: OnChangeValue<IOption, boolean>) => {
    setValue((selectedOption as IOption).value);
  };

  return (
    <Select
      className="select"
      isSearchable={false}
      isMulti={false}
      options={options}
      onChange={onChangeFilter}
      value={selectedValue}
      placeholder={placeholder}
    />
  );
};
