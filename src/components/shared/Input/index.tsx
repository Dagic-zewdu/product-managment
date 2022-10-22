import React, { InputHTMLAttributes } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  size?: 'sm' | 'lg' | undefined | any;
  value?: string | number | string[] | undefined;
}
function Input({ label, type, ...props }: Props) {
  return (
    <FloatingLabel controlId="floatingInput" label={label} className="custom-input">
      <Form.Control type={type} {...props} placeholder={label} className="custom-input w-100" />
    </FloatingLabel>
  );
}

export default Input;
