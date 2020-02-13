//libraries
import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import classes from './NavItem.scss';

const navItem = (props) => {
  const router = useRouter();
  return (
    <li>
      <Link
        href={props.href}>
        <a onClick={props.clicked} className={router.pathname === props.href ? classes.Active : classes.NotActive}>
          {props.children}
        </a>
      </Link>
    </li>
  )
}

export default navItem;
