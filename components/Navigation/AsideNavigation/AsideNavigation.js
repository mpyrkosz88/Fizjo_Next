//libraries
import React from 'react';
//styles
import classes from './AsideNavigation.scss';

const AsideNavigation = (props) => {
  const childrenWithProps = props.children.map((child, index) =>
      React.cloneElement(child, {
        active: classes.Active,
        key:index})
      );

  return (
    <aside className={classes.Aside}>
      <nav>
        <ul>
        {childrenWithProps}
        </ul>
      </nav>
    </aside>
      
)
}


export default AsideNavigation;
