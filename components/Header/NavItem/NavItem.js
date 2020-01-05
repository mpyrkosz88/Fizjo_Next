//libraries
import React from 'react';
import Link from 'next/link';

const navItem = (props) => (
  <li>
    <Link
      href={props.link}
      onClick={props.clicked}
      activeClassName={props.active}
      >
      <a>
        {props.children}
      </a>
    </Link>
  </li>
)
export default navItem;
