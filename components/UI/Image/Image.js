//libraries
import React from 'react';

//styles
import classes from './Image.scss';

const image = (props) => <div className={classes.Image}>
    <img src={props.src} alt={props.alt}>{props.children}</img>
</div>

export default image;