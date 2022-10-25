import { generate } from 'randomized-string';
import React, { useState, MouseEvent } from 'react';
import Input from '../../../shared/Input';

type Props = {};

function IdGenerate({}: Props) {
  const [checked, setChecked] = useState<boolean>(true);
  const [autoId, setAutoId] = useState('123');
  const handleAutoGenereateId = (e: MouseEvent<HTMLInputElement>) => {
    //@ts-ignore
    let check = e.target.checked;
    setChecked(check);
    if (check) {
      setAutoId(generate({ charset: 'number', length: 3 }));
    }
  };
  return (
    <div className="d-flex align-items-center mb-3 gp-10">
      <Input label="Id" disabled={checked} value={autoId} />
      <div className="d-flex align-items-center gp-10">
        <input type="checkbox" id="" checked={checked} onClick={(e) => handleAutoGenereateId(e)} />
        <p className="mb-0" style={{ fontSize: 12 }}>
          <small>Auto generate id</small>
        </p>
      </div>
    </div>
  );
}

export default IdGenerate;
