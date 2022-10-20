import React, { Children, useState } from 'react';
import Navbar from '../navbar';
import SideNav from '../sidenav';

type container = {
  children: React.ReactNode;
};
function AllContainer({ children }: container) {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <React.Fragment>
      <SideNav toggle={toggle} />
      <div id="main">
        <button className="" onClick={(e) => setToggle((t: boolean) => !t)}>
          <i className="fa-solid fa-bars"></i>
        </button>
        {children}
      </div>
    </React.Fragment>
  );
}

export default AllContainer;
