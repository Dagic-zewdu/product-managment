import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { AddProductContext } from '../../../context';
import AllContainer from '../../layout/AllContainer';
import AddProductsTabs from './tabs';

function AddProducts() {
  const [tab, setTab] = useState('single');

  return (
    <AllContainer>
      <AddProductsTabs />
    </AllContainer>
  );
}

export default AddProducts;
