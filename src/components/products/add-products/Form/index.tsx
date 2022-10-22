import React from 'react';
import Input from '../../../shared/Input';
import UploadImage from '../uploadImage';

function AddProductForm() {

  return (
    <div className="row">
      <div className="col-lg-6 mb-3">
        <UploadImage />
      </div>
      <div className="col-lg-5">
        <Input label="Name" />
        <Input label="Quantity" type="number" />
        <Input label="Unit Price" min={1} type="number" className="" />
        <Input label="Selling Price" min={1} type="number" />
      </div>
    </div>
  );
}

export default AddProductForm;
