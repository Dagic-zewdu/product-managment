import React from 'react';
import CreatableSelect from 'react-select/creatable';

type Props = {
  options: Array<{ value: string | number; id: string | number; icon?: JSX.Element }>;
  isClearable?: boolean;
};

function CustomCreatableSelect({ options, isClearable = true }: Props) {
  return <CreatableSelect isClearable={isClearable} options={options} />;
}

export default CustomCreatableSelect;
