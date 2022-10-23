import React, { useState } from 'react';
import CustomCreatableSelect from '../../../shared/CreatableSelect';
import Input from '../../../shared/Input';
import UploadImage from '../uploadImage';
import CreatableSelect from 'react-select/creatable';
import { generate } from 'randomized-string';

const options = [
  { label: 'Tv', value: 1, icon: 'https://www.svgrepo.com/show/4270/television.svg' },
  { label: 'refrigerator', value: 2 },
  { label: 'Dstv', value: 3 },
];
const quantityName = [
  { label: 'piece', value: 'piece' },
  { label: 'kg', value: 'kg' },
  { label: 'litre', value: 'litre' },
];
function AddProductForm() {
  const [checked, setChecked] = useState<boolean>(false);
  const [autoId, setAutoId] = useState('123');
  const handleAutoGenereateId = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    //@ts-ignore
    let check = e.target.checked;
    setChecked(check);
    if (check) {
      setAutoId(generate({ charset: 'number', length: 4 }));
    }
  };

  return (
    <div className="row">
      <div className="col-lg-6 mb-3">
        <UploadImage />
      </div>
      <div className="col-lg-5">
        <div className="d-flex align-items-center mb-3" style={{ gap: 16 }}>
          <Input label="Id" disabled={checked} value={autoId} />
          <input
            type="checkbox"
            id=""
            checked={checked}
            onClick={(e) => handleAutoGenereateId(e)}
          />
        </div>
        <Input label="Name" />
        <div className="d-flex align-items-center mb-3" style={{ gap: 16 }}>
          <Input label="Quantity" type="number" className="w-50" />
          <CreatableSelect
            options={quantityName}
            placeholder="Qauntity name"
            defaultValue={quantityName[0]}
            className="w-100"
          />
        </div>
        <Input label="Unit Price" min={1} type="number" className="" />
        <Input label="Expired date" />
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
