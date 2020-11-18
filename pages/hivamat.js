//libraries
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';

//components
import Heading2 from '../components/UI/Headings/Heading2';
import Heading3 from '../components/UI/Headings/Heading3';
import Image from '../components/UI/Image/Image';
import classes from '../styles/Hivamat.scss';
import ListItem from '../components/UI/List/ListItem';

//images
import HivamatImg from '../assets/images/Hivamat.jpg';

class Hivamat extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="Description" content="Hivamat. Oscylacja głęboka. Uszkodzenia neurologiczne. Gojenie ran">
          </meta>
          <link rel="canonical" href="http://www.doleczychfizjoterapia.pl/hivamat" />
          <title>Hivamat. Oscylacja głęboka</title>
        </Head>
        <main className={classes.Hivamat}>
          <Grid container justify="space-between">
            <Heading2>Hivamat 200 </Heading2>
            <Heading3>Zabiegi z wykorzystaniem oscylacji głębokiej</Heading3>
            <Image src={HivamatImg} alt="Hivamat"/>
            <p>
              Oscylacja głęboka jest unikalną, opatentowaną metodą terapeutyczną. Jej specyficzny charakter pozwala na wytwarzanie w tkankach biologiczne efekty oscylacji wykorzystujących elektrostatyczne przyciąganie i odpychanie.
            </p>
            <p>
              W przeciwieństwie do innych rodzajów terapii, HIVAMAT 200 oddziałuje głęboko na wszystkie warstwy tkanek (skóra, tkanka łączna, tkanka tłuszczowa podskórna, mięśnie, naczynia krwionośne i limfatyczne), przy czym nie towarzyszą temu nieprzyjemne odczucia.
            </p>
            <Heading3>Wskazania</Heading3>
            <ul>
              <ListItem>Urazy mechaniczne i przeciążeniowe</ListItem>
              <ListItem>Uszkodzenie neurologiczne</ListItem>
              <ListItem>Zespoły bólowe</ListItem>
              <ListItem>Regneracja po treningu i stabilizacja wydolności</ListItem>
              <ListItem>Działanie przeciwobrzękowe i przeciwzwłóknieniowe</ListItem>
              <ListItem>Wspomaganie gojenia ran</ListItem>
            </ul>
          </Grid>
        </main>
      </>
    )
  }
}

export default Hivamat;

