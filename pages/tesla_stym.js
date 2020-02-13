//libraries
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';

//components
import Heading2 from '../components/UI/Headings/Heading2';
import Heading3 from '../components/UI/Headings/Heading3';
import Heading4 from '../components/UI/Headings/Heading4';
import Image from '../components/UI/Image/Image';
import classes from '../styles/TeslaStym.scss';
import ListItem from '../components/UI/List/ListItem';

//images
import TeslaStymImg1 from '../assets/images/TeslaStym.jpg';

class TeslaStym extends Component {

  render() {
    return (
      <>
        <Head>
          <meta name="Description" content="Tesla Stym. Terapia Polem Magnetycznym. Jak działa głęboka stymulacja elektromagnetyczna?">
          </meta>
          <title>Tesla Stym. Terapia Polem Magnetycznym.</title>
        </Head>
        <main className={classes.TeslaStym}>
          <Grid container justify="space-between">
            <Heading2>Tesla Stym</Heading2>
            <Heading3>Terapia Polem Magnetycznym</Heading3>
            <Heading4>Jak działa głęboka stymulacja elektromagnetyczna?</Heading4>
            <p>Głębokość efektywnej stymulacji polem elektromagnetycznym za pomocą urządzenia Tesla Stym sięga do 10 cm.</p>
            <p>Indukcja ta jest około 150 razy większa od najmocniejszych stososwanych do tej pory aparatów do magnetoterapii.</p>
            <Heading3>Wskazania</Heading3>
            <Grid item xs={12} sm={6} >
              <ul>
                <ListItem>Schorzenia kręgosłupa (np. ostry / przewlekły ból, rwa kulszowa, zmiany zwyrodnieniowe</ListItem>
                <ListItem>Zaburzenia układu nerwowego</ListItem>
                <ListItem>Zaburzenia układu mięśniowo-szkieletowego</ListItem>
                <ListItem>Rehabitacja sportowa (osłabienie i zaniki mięśni)</ListItem>
                <ListItem>Zaburzenia układu moczowo-płciowego</ListItem>
                <ListItem>Terapia nietrzymania moczu</ListItem>
                <ListItem>Złamania</ListItem>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Image src={TeslaStymImg1}></Image>
            </Grid>
          </Grid>
        </main>
      </>
    )
  }
}

export default TeslaStym;