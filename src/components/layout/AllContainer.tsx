import React, { Children } from 'react';
import Navbar from '../navbar';
import SideNav from '../sidenav';

type container = {
  children: React.ReactNode;
};
function AllContainer({ children }: container) {
  return (
    <React.Fragment>
      <SideNav />
      <div id="main">{children}</div>
    </React.Fragment>
  );
}

export default AllContainer;
