//libraries
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';

//components
import Heading2 from '../components/UI/Headings/Heading2';
import Heading3 from '../components/UI/Headings/Heading3';
import Image from '../components/UI/Image/Image';
import classes from '../styles/FalaUderzeniowa.scss';
import ListItem from '../components/UI/List/ListItem';
import AsideLink from '../components/Navigation/AsideNavigation/AsideLink/AsideLink';
import AsideNavigation from '../components/Navigation/AsideNavigation/AsideNavigation';

//images
import FalaImg5 from '../assets/images/fala5.jpg';
import FalaImg6 from '../assets/images/fala6.jpg';
import FalaImg7 from '../assets/images/fala7.jpg';

class FalaSkupiona extends Component {
  render () {
    return (
      <>
      <Head>
      <meta name="Description" content="Fala uderzeniowa skupiona. Walka z bólem. Jak działa fala uderzeniowa? Łokieć tenisisty golfisty, zapalenie przyczepów mięśniowych">
      </meta>
      <title>Fala uderzeniowa skupiona.</title>
      <link rel="canonical" href="http://www.doleczychfizjoterapia.pl/fala_skupiona" />
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
                <Heading2>Skupiona fala uderzeniowa</Heading2>
                <Heading3>Pierwsze połączenie zewnątrzustrojowej terapii falami uderzeniowymi </Heading3>
                </Grid>
              <Grid item xs={12} sm={6} >
                <div className={classes.Pics}>
                  <Image src={FalaImg5} alt="FalaSkupiona"/>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ul>
                  <ListItem>Fale wysokiej energii <sup className={classes.Index}> ESWT</sup></ListItem>
                  <ListItem>Fale niskiej energii <sup className={classes.Index}> RSWT</sup></ListItem>
                  <ListItem>Fale o planarnym spososobie rozchodzenia się energii <sup className={classes.Index}> PSWT</sup></ListItem>
                </ul>
              </Grid>
              <Grid item sm={12}>
              <Heading3>Kombinacja ESWT i RSWT jeszcze lepsze efekty!</Heading3>
              <p>Fala uderzeniowa jest sercem nowoczesnego urządzenia ESWT, co stanowi o skuteczności oraz wszechstronności systemów leczenia falą uderzeniową.</p>
              <ul>
              <ListItem>Potężny zakres mocy, indywidualnie dostosowany</ListItem>
              <ListItem>Skuteczna terapia głęboko położonych obszarów</ListItem>
              <ListItem>Duża strefa ogniskowania podnosi skuteczność lokalizacji schorzeń.
              Proste przełączenie z głowicy ogniskującej na planarną lub radialną, przy szerokim
              spectrum głowic terapeutycznych</ListItem>
            </ul>
            <Heading3>Najnowsza technologia</Heading3>
            <div className={classes.Pics}>
            <Image src={FalaImg6} alt="FalaSkupiona"/>
          </div>
          <Heading3>Wskazania</Heading3>
          <div className={classes.Pics}>
          <Image src={FalaImg7} alt="FalaSkupiona"/>
        </div>
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

export default FalaSkupiona;