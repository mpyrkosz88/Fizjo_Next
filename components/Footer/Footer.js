import React from 'react';
import Grid from '@material-ui/core/Grid';


import classes from './Footer.scss';

const footer = () => (
    <div className={classes.Footer}>
        <Grid container className={classes.FooterContainer}>

            <Grid item xs={12} sm={12} md={6}>
                <p className={classes.FooterUppercase}>Rejestracja telefoniczna</p>
                <div className={classes.FooterColumn}>
                    <i className="fas fa-phone"></i>
                    <p>(+48) 609 687 320</p>
                    <p>-</p>
                    <p>Magister Arnold Doleczych</p>
                </div>
                <div className={classes.FooterColumn}>
                    <i className="fas fa-phone"></i>
                    <p>(+48) 604 923 379</p>
                    <p>-</p>
                    <p>Fizjoterapeuta Michał Doleczych</p>
                </div>
                <div className={classes.FooterColumn}>
                    <i className="fas fa-phone"></i>
                    <p>(+48) 535 070 283</p>
                    <p>-</p>
                    <p>Fizjoterapeuta Katarzyna Doleczych</p>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <p className={classes.FooterUppercase}>Godziny otwarcia</p>
            <div className={classes.FooterColumn}>
                <i className="fas fa-clock"></i>
                <p>Poniedziałek-Piątek</p>
            </div>
            <div className={classes.FooterColumn}>
                <p className={classes.MarginLeft}>08:00 - 17:00</p>
            </div>
            <div className={classes.FooterColumn}>
            <i className="fas fa-clock"></i>
            <p>Sobota-Niedziela</p>
            </div>
            <div className={classes.FooterColumn}>
            <p className={classes.MarginLeft}>Nieczynne</p>
            </div>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
            <p className={classes.FooterUppercase}>Jak nas znaleźć</p>
            <div className={classes.FooterColumn}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1249.953884723075!2d16.188445299336255!3d51.20235112688946!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f0d701d4a584b%3A0x35712f53bfa763aa!2sBiegunowa.+NZOZ!5e0!3m2!1spl!2sfi!4v1531848332805"></iframe>
            </div>
            </Grid>

        </Grid>

    </div>
)

export default footer


