import React from 'react';
import CustomCreatableSelect from '../../../shared/CreatableSelect';
import Input from '../../../shared/Input';
import UploadImage from '../uploadImage';
const options = [
  { label: 'Tv', value: 1, icon: 'https://www.svgrepo.com/show/4270/television.svg' },
  { label: 'refrigerator', value: 2 },
  { label: 'Dstv', value: 3 },
];
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
        <CustomCreatableSelect
          placeholder="Select category"
          options={options}
          onChange={(value) => console.log(value)}
        />
      </div>
    </div>
  );
}

export default AddProductForm;
