//libraries
import React from 'react';

//styles
import classes from './Headings.scss';

const mainHeading = (props) => <h1 className={classes.MainHeading}>{props.children}</h1>

export default mainHeading;