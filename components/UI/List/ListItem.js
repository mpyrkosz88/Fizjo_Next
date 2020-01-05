//libraries
import React from 'react';

//styles
import classes from './ListItem.scss';

const ListItem = (props) => <li className={classes.ListItem}>{props.children}</li>

export default ListItem;