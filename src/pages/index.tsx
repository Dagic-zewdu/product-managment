import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from '../components/categories';
import Products from '../components/products';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
};

export default Pages;
