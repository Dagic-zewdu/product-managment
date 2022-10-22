import React, { InputHTMLAttributes } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  size?: 'sm' | 'lg' | undefined | any;
  value?: string | number | string[] | undefined;
}
function Input({ label, type,className, ...props }: Props) {
  return (
    <FloatingLabel controlId="floatingInput" label={label} className={`custom-input ${className}`}>
      <Form.Control type={type} {...props} placeholder={label} className={`w-100 ${className}`} />
    </FloatingLabel>
  );
}

export default Input;
