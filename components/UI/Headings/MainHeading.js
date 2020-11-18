//libraries
import React from 'react';

//styles
import classes from './Headings.scss';

const mainHeading = (props) => <p className={classes.MainHeading}>{props.children}</p>

export default mainHeading;