import React, { useEffect, useRef, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import SideNav from '../sidenav';
import styles from './index.module.scss';

type container = {
  children: React.ReactNode;
};
function AllContainer({ children }: container) {
  const [toggle, setToggle] = useState<boolean>(true);
  const [button, showButton] = useState<boolean>(false);
  const ref: any = useRef();
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
  const closeSideNav = () => {
    if (width > 1199) {
      return;
    } else setToggle(false);
  };
  return (
    <React.Fragment>
      <SideNav toggle={toggle} setToggle={closeSideNav} />
      <div id="main">
        <header className="d-flex justify-content-between align-items-center">
          <div className="">
            {button && (
              <div className={styles.toggleButton} onClick={() => setToggle(true)}>
                <i className="fa-solid fa-bars fa-2x"></i>
              </div>
            )}
          </div>
        </header>
        <section id="body">{children}</section>
      </div>
    </React.Fragment>
  );
}

export default AllContainer;
