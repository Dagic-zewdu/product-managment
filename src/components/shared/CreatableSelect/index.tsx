import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
// @ts-ignore
import styles from './index.module.scss'; // @ts-ignore

type option = { value: string | number; label: string; icon?: string };
type props = {
  options: Array<option>;
  isClearable?: boolean;
  onChange: (value: string | number) => void;
  placeholder: string;
  value?: option;
  isMulti?: boolean;
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
        <div className={styles.inputSelectIcon}>{label?.charAt(0)}</div>
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
  isMulti = false,
}: props) {
  const [Value, setValue] = useState<option>(value ? value : options[0]);
  const handleChange = (value: option) => {
    setValue(value);
    // @ts-ignore
    onChange(value?.value);
  };
  return (
    <CreatableSelect
      isClearable={isClearable}
      formatOptionLabel={Control}
      placeholder={placeholder}
      isMulti={isMulti}
      // @ts-ignore
      options={options}
      // @ts-ignore
      onChange={(value) => handleChange(value)}
    />
  );
}

export default CustomCreatableSelect;
