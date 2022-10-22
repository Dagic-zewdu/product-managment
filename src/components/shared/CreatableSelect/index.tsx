import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { components, ControlProps, GroupBase } from 'react-select';
import styles from './index.module.scss';
type option = { value: string | number; label: string; icon?: string };
type props = {
  options: Array<option>;
  isClearable?: boolean;
  onChange: (value: string | number) => void;
  placeholder: string;
  value?: option;
};

const Control = ({ value, label, icon }: option) => (
  <React.Fragment>
    {icon ? (
      <div className={styles.selectInputContainer}>
        <img src={icon} alt="" className={styles.inputIconImage} />
        <p className="mb-0">{label}</p>
      </div>
    ) : (
      <div className={styles.selectInputContainer}>
        <div className={styles.inputSelectIcon}>
          <i className="fa-regular fa-print"></i>
        </div>
        <p className="mb-0">{label}</p>
      </div>
    )}
  </React.Fragment>
);

function CustomCreatableSelect({
  options,
  isClearable = true,
  value,
  onChange,
  placeholder,
}: props) {
  const [Value, setValue] = useState<props['value']>(value ? value : options[0]);
  const handleChange = (value: props['value']) => {
    setValue(value);
    // @ts-ignore
    onChange(value?.label);
  };
  return (
    <CreatableSelect
      isClearable={isClearable}
      formatOptionLabel={Control}
      placeholder={placeholder}
      // @ts-ignore
      options={options}
    />
  );
}

export default CustomCreatableSelect;
