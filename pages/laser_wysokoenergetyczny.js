//libraries
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';

//components
import Heading2 from '../components/UI/Headings/Heading2';
import Heading3 from '../components/UI/Headings/Heading3';
import Image from '../components/UI/Image/Image';
import classes from '../styles/Laser.scss';
import ListItem from '../components/UI/List/ListItem';

//images
import LaserImg1 from '../assets/images/Laser1.jpg';

class Laser extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="Description" content="Laser wysokoenergetyczny. Rewolucja w terapii laserowej. Ból kręgosłupa rwa kulszowa łokieć tenisisty ">
          </meta>
          <title>Laser wysokoenergetyczny. Rewolucja w terapii laserowej.</title>
          <link rel="canonical" href="http://www.doleczychfizjoterapia.pl/laser_wysokoenergetyczny" />
        </Head>
        <main className={classes.Laser}>
          <Grid container justify="space-between">
            <Grid item sm={12}>
              <Heading2>Lasery wysokoenergetyczne</Heading2>
              <Heading3>Rewolucja w terapii laserowej</Heading3>
              <p>Moc wyjściowa: 7W do 50 razy wyższa niż w przypadku zimnej laseroterapii.</p>
              <p>Nowa technologia w laseroterapii.</p>
              <p>Głębsza penetracja tkanki - rezultaty potwierdzone klinicznie.</p>
              <p>Maksymalne bezpieczeństwo.</p>
            </Grid>
            <Heading3>Wskazania</Heading3>
            <Grid item xs={12} sm={6} >
              <ul>
                <ListItem>Bóle kręgosłupa - choroba zwyrodnieniowa stawów, dyskopatia, skurcze mięśni</ListItem>
                <ListItem>Zapalenie powięzi podeszwowej / ostroga piętowa</ListItem>
                <ListItem>Łokieć tenisisy / łokieć golfisty</ListItem>
                <ListItem>Bóle barków - zespół bolesnego barku, uraz pierścienia rotatorów</ListItem>
                <ListItem>Zespół szyjno-barkowy</ListItem>
                <ListItem>Zwichnięcie stawu</ListItem>
                <ListItem>Naciągnięcie mięśnia</ListItem>
                <ListItem>Powieźiowe punkty spustowe, skurcze mięśni</ListItem>
                <ListItem>Zapalenie stawu kolanowego</ListItem>
                <ListItem>Zapalenie kaletki</ListItem>
                <ListItem>Trądzik</ListItem>
                <ListItem>Zmiany skórne</ListItem>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Image src={LaserImg1} alt="Laser1"></Image>
            </Grid>
          </Grid>
        </main>
      </>
    )
  }
}


export default Laser;

