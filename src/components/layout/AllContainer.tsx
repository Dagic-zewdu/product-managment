import React, { Children } from 'react';
import Navbar from '../navbar';

type container = {
  children: React.ReactNode;
};
function AllContainer({ children }: container) {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
}

export default AllContainer;
