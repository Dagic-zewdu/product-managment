import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
type props = {
  title: string;
  options?: Array<{ name: string; linkName: string }>;
  icon?: JSX.Element;
  expanded?: boolean;
  setToggle: Function;
};
function CollapsableNavigation({ title, options, icon, expanded = false, setToggle }: props) {
  const [show, setShow] = useState<boolean>(expanded);
  return (
    <li className="sidebar-item  has-sub">
      <div className="sidebar-link" onClick={() => setShow((s: boolean) => !s)}>
        {icon}
        <span>{title}</span>
      </div>
      <ul className={`submenu ${show ? 'active' : ''}`}>
        {options?.map(({ name, linkName }, index) => (
          <li className="submenu-item" key={index} onClick={() => setToggle()}>
            <Link to={linkName}>{name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default CollapsableNavigation;
