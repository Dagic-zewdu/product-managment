import React, { useState, MouseEvent } from 'react';
import CustomCreatableSelect from '../../../shared/CreatableSelect';
import Input from '../../../shared/Input';
import UploadImage from '../uploadImage';
import CreatableSelect from 'react-select/creatable';
import IdGenerate from './IdGenrate';
import { today } from '../../../../utils/date';

const options = [
  { label: 'Tv', value: 1, icon: 'https://www.svgrepo.com/show/4270/television.svg' },
  { label: 'refrigerator', value: 2 },
  { label: 'Dstv', value: 3 },
];
const quantityName = [
  { label: 'piece', value: 'piece' },
  { label: 'kg', value: 'kg' },
  { label: 'litre', value: 'litre' },
  { label: 'pound', value: 'pound' },
  { label: 'gram', value: 'gram' },
];
function AddProductForm() {
  return (
    <div className="row">
      <div className="col-lg-6 mb-3">
        <UploadImage />
      </div>
      <div className="col-lg-5">
        <IdGenerate />
        <Input label="Name" />
        <div className="d-flex align-items-center mb-3 gp-16">
          <Input label="Quantity" type="number" min={1} className="w-50" />
          <CreatableSelect
            options={quantityName}
            placeholder="Qauntity name"
            defaultValue={quantityName[0]}
            className="w-100"
          />
        </div>
        <Input label="Unit Price" min={1} type="number" className="" />
        <div className="d-flex align-items-center mb-3 gp-10">
          <Input label="Selling Price" min={1} type="number" />
          <div className="d-flex align-items-center gp-10">
            <input type="checkbox" id="" />
            <p className="mb-0" style={{ fontSize: 14 }}>
              <small>Negotiable</small>
            </p>
          </div>
        </div>
        <Input label="Expired date" type="date" min={today()} />
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
