import React, { InputHTMLAttributes } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  size?: 'sm' | 'lg' | undefined | any;
  value?: string | number | string[] | undefined;
  error?: string;
}
function Input({ label, type, className, error, ...props }: Props) {
  return (
    <React.Fragment>
      <FloatingLabel
        controlId="floatingInput"
        label={label}
        style={{ color: error ? '#ca1c20' : '' }}
        className={`custom-input ${className}`}
      >
        <Form.Control
          type={type}
          {...props}
          placeholder={label}
          style={{ border: error ? '1px solid #ca1c20' : '' }}
        />
      </FloatingLabel>
      <div className="mb-3">
        {error && (
          <p className="text-danger">
            <small>{error}</small>
          </p>
        )}
      </div>
    </React.Fragment>
  );
}

export default Input;
