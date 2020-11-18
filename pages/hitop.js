//libraries
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';

//components
import Heading2 from '../components/UI/Headings/Heading2';
import Heading3 from '../components/UI/Headings/Heading3';
import Image from '../components/UI/Image/Image';
import classes from '../styles/Hitop.scss';
import ListItem from '../components/UI/List/ListItem';

//images
import HitopImg from '../assets/images/Hitop.jpg';

class Hitop extends Component {
  render() {
    return (
      <>
      <Head>
      <meta name="Description" content="Hitop. TERAPIA ENERGOTONOWA. Elektroterapia, Łokieć tenisisty, Bóle pourazowe i pooperacyjne">
      </meta>
          <title>Hitop. High Tone Power Therapy. Terapia energotonowa</title>
          <link rel="canonical" href="http://www.doleczychfizjoterapia.pl/hitop" />
        </Head>
        <main className={classes.Hitop}>
          <Grid container justify="space-between">
            <Heading2>Hitop High Tone Power Therapy</Heading2>
            <Heading3>Terapia energotonowa</Heading3>
            <Image src={HitopImg} alt="Hitop" />
            <p>Standardowa elektroterapia pobudza nerwy i mięśnie, natomiast głównym celem terapii energotonowej jest bezpośrednie działanie na metaboliz komórek, a różnice widoczne są w działaiu, technologii i praktycznym użyciu.</p>
            <Heading3>Wskazania</Heading3>
            <Grid>
            <ul>
              <ListItem>Zespół bólowy kręgosłupa lędźwiowego, szyjnego, piersiowego</ListItem>
              <ListItem>Łokieć tenisisty</ListItem>
              <ListItem>Choroba zwyrodnieniowa stawów kolanowych</ListItem>
              <ListItem>Choroba zwyrodnieniowa stawu biodrowego</ListItem>
              <ListItem>Zespół bolesnego barku</ListItem>
              <ListItem>Bóle pourazowe i pooperacyjne</ListItem>
              <ListItem>Stres fizyczny, psychiczny i stany wyczerpania</ListItem>
            </ul>
            </Grid>
          </Grid>
        </main>
        </>
    )
  }
}

export default Hitop;

