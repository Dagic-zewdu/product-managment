import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
type props = {
  title: string;
  options?: Array<{ name: string; linkName: string }>;
  icon: JSX.Element;
};
function CollapsableNavigation({ title, options, icon }: props) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <li className="sidebar-item  has-sub">
      <div className="sidebar-link" onClick={() => setShow((s: boolean) => !s)}>
        {icon}
        <span>{title}</span>
      </div>
      <ul className={`submenu ${show ? 'active' : ''}`}>
        {options?.map(({ name, linkName }, index) => (
          <li className="submenu-item" key={index}>
            <Link to={`/${linkName}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default CollapsableNavigation;
