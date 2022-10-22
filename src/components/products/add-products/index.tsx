import React, { useState, useMemo } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { AddProductContext } from '../../../context';
import AllContainer from '../../layout/AllContainer';
import AddProductForm from './Form';
import AddProductsTabs from './tabs';

function AddProducts() {
  const { search } = useLocation();
  const query = search.split('=')[1];
  const [tab, setTabs] = useState(query ? query : 'single');
  const value = useMemo(() => {
    return { tab, setTabs, query };
  }, [tab, query]);
  return (
    <AllContainer>
      <h1 className="display-4 mb-3">Add Product</h1>
      <AddProductContext.Provider value={value}>
        <AddProductsTabs />
        <AddProductForm />
      </AddProductContext.Provider>
    </AllContainer>
  );
}

export default AddProducts;
