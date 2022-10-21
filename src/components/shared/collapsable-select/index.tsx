import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link, useParams, useLocation } from 'react-router-dom';
type props = {
  title: string;
  options?: Array<{ name: string; linkName: string }>;
  icon?: JSX.Element;
  expanded?: boolean;
  setToggle: Function;
};
function CollapsableNavigation({ title, options, icon, expanded = false, setToggle }: props) {
  const [show, setShow] = useState<boolean>(expanded);
  const location = useLocation();
  const pathname = location?.pathname;
  const checkActive = options?.find((option) => option.linkName === pathname);
  return (
    <li className={`sidebar-item  has-sub ${checkActive ? 'active' : ''}`}>
      <div className="sidebar-link" onClick={() => setShow((s: boolean) => !s)}>
        {icon}
        <span>{title}</span>
      </div>
      <ul className={`submenu ${show ? 'active' : ''}`}>
        {options?.map(({ name, linkName }, index) => (
          <li
            className={`submenu-item ${linkName === pathname ? 'active' : ''}`}
            key={index}
            onClick={() => setToggle()}
          >
            <Link to={linkName}>{name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default CollapsableNavigation;
