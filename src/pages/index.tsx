import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from '../components/categories';
import Products from '../components/products';
import AddProducts from '../components/products/add-products';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/addProducts" element={<AddProducts />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
};

export default Pages;
