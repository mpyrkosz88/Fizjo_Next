//libraries
import React, { Component } from 'react';

import classes from './Layout.scss';
import '../../styles/reset.scss';

import Slider from '../Slider/Slider';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Layout extends Component {

    render () {
        return (
            <div className={classes.Layout}>
                <div className={classes.Container}>
                    <Header />
                    <Slider />
                        {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Layout;