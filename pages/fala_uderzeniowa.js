//libraries
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';

//components
import Heading2 from '../components/UI/Headings/Heading2';
import Heading3 from '../components/UI/Headings/Heading3';
import Heading4 from '../components/UI/Headings/Heading4';
import Image from '../components/UI/Image/Image';
import classes from '../styles/FalaUderzeniowa.scss';
import ListItem from '../components/UI/List/ListItem';
import AsideLink from '../components/Navigation/AsideNavigation/AsideLink/AsideLink';
import AsideNavigation from '../components/Navigation/AsideNavigation/AsideNavigation';

//images
import FalaImg2 from '../assets/images/fala2.jpg';
import FalaImg3 from '../assets/images/fala3.jpg';
import FalaImg4 from '../assets/images/fala4.jpg';


class FalaUderzeniowa extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="Description" content="Fala uderzeniowa. Walka z bólem. Jak działa fala uderzeniowa? Łokieć tenisisty golfisty, zapalenie przyczepów mięśniowych">
          </meta>
          <title>Fala uderzeniowa. Skuteczna walka z bólem narządów ruchu</title>
          <link rel="canonical" href="http://www.doleczychfizjoterapia.pl/fala_uderzeniowa" />
        </Head>
        <main>
          <Grid container justify="space-between">
            <Grid item sm={3}>
              <AsideNavigation>
                <li>
                  <AsideLink scroll={false} href="/fala_uderzeniowa">
                    Fala uderzeniowa
                  </AsideLink>
                </li>
                <li>
                  <AsideLink scroll={false} href="/fala_skupiona">
                    Skupiona fala uderzeniowa
                  </AsideLink>
                </li>
              </AsideNavigation>
            </Grid>
            <Grid item sm={9}>
              <div className={classes.FalaUderzeniowa}>
                <Grid container justify="space-between">
                  <Grid item sm={12}>
                    <Heading2>Fala uderzeniowa</Heading2>
                    <Heading3>Skuteczna walka z bólem narządów ruchu</Heading3>
                    <Heading4>Jak działa fala uderzeniowa?</Heading4>
                    <p>Fala uderzeniowa przyspiesza procesy lecznicze poprzez stymulację ciała do samouzdrowienia. Poprawia metabolizm i polepsza krążenie krwi. Uszkodzona tkanka stopniowo regeneruje się aż w końcu zostaje wyleczona.</p>
                  </Grid>
                  <Heading3>Wskazania</Heading3>
                  <Grid item xs={12} sm={6} >
                    <div className={classes.Pics}>
                      <Image src={FalaImg2} alt="Fala Uderzeniowa"/>
                      <Image src={FalaImg3} alt="Fala Uderzeniowa"/>
                      <Image src={FalaImg4} alt="Fala Uderzeniowa"/>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ul>
                      <ListItem>Ostroga piętowa</ListItem>
                      <ListItem>Łokieć tenisisty i golfisty</ListItem>
                      <ListItem>Zapalenie ścięgien mięśni rotatorów stawu barkowego</ListItem>
                      <ListItem>Ból barku</ListItem>
                      <ListItem>Zapalenie ścięgna rzepkowego</ListItem>
                      <ListItem>Zapalenie ścięgna Achillesa</ListItem>
                      <ListItem>Ból biodra, nadgarstka, szyi i pleców</ListItem>
                      <ListItem>Mięśniowo-powięziowe punkty spustowe</ListItem>
                      <ListItem>Zespół mięśnia piszczelowego przedniego</ListItem>
                      <ListItem>Przewlekłe zapalenie przyczepów mięśniowych</ListItem>
                    </ul>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </main>
      </>
    )
  }
}


export default FalaUderzeniowa;
