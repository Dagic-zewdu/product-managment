import React, { Children, RefObject, useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import useWindowSize from '../../hooks/useWindowSize';
import Navbar from '../navbar';
import SideNav from '../sidenav';
import styles from './index.module.scss';

type container = {
  children: React.ReactNode;
};
function AllContainer({ children }: container) {
  const [toggle, setToggle] = useState<boolean>(true);
  const [button, showButton] = useState<boolean>(false);
  const ref: any = useRef();
  useOnClickOutside(ref, () => setToggle(false));
  const { width } = useWindowSize();
  useEffect(() => {
    if (width > 1199) {
      showButton(false);
      setToggle(true);
    } else {
      showButton(true);
      setToggle(false);
    }
  }, [width]);
  console.log(width);
  return (
    <React.Fragment>
      <SideNav toggle={toggle} />
      <div id="main">
        <header className="d-flex justify-content-between align-items-center">
          <div className="">
            {button && (
              <div className={styles.toggleButton} ref={ref} onClick={() => setToggle(true)}>
                <i className="fa-solid fa-bars fa-2x"></i>
              </div>
            )}
          </div>
          
        </header>
        {children}
      </div>
    </React.Fragment>
  );
}

export default AllContainer;
