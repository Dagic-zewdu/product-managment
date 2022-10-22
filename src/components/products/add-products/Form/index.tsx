import React from 'react';
import Input from '../../../shared/Input';

function AddProductForm() {
  return (
    <div className="row">
      <div className="col-lg-6">
        
      </div>
      <div className="col-lg-6">
        <Input label="Name" />
        <Input label="Quantity" type="number" />
        <Input label="Unit Price" min={1} type="number" className="" />
        <Input label="Selling Price" min={1} type="number" />
      </div>
    </div>
  );
}

export default AddProductForm;
