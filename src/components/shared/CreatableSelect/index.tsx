import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { components, ControlProps, GroupBase } from 'react-select';
import styles from './index.module.scss';

type props = {
  options: Array<{ value: string | number; label: string | number; icon?: string }>;
  isClearable?: boolean;
  onChange: (value: string | number) => void;
  value?: { value: string | number; label: string | number; icon?: string };
};

const Control = ({ children, ...props }: ControlProps<props['options']>) => {
  // @ts-ignore
  const { label, icon } = props.selectProps;
  console.log(props);
  return (
    <components.Control {...props}>
      {icon ? (
        <div className={styles.selectInputContainer}>
          <img src={icon} alt="" className={styles.inputIconImage} />
          <p>{label}</p>
        </div>
      ) : (
        <div className={styles.selectInputContainer}>
          <div className={styles.inputSelectIcon}>{label.charAt[0]}</div>
          <p>{label}</p>
        </div>
      )}
    </components.Control>
  );
};

function CustomCreatableSelect({ options, isClearable = true, value, onChange }: props) {
  const [Value, setValue] = useState<props['value']>(value ? value : options[0]);
  const handleChange = (value: props['value']) => {
    setValue(value);
    // @ts-ignore
    onChange(value?.label);
  };
  return (
    <CreatableSelect
    
      isClearable={isClearable}
      components={{ Control }}
      // @ts-ignore
      options={options}
    />
  );
}

export default CustomCreatableSelect;
