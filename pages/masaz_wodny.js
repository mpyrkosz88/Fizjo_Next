//libraries
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';

//components
import Heading2 from '../components/UI/Headings/Heading2';
import Heading3 from '../components/UI/Headings/Heading3';
import Image from '../components/UI/Image/Image';
import classes from '../styles/MasazWodny.scss';
import ListItem from '../components/UI/List/ListItem';

//images
import VelusImg from '../assets/images/VelusJet.jpg';

class Velus extends Component {
  render() {
    return (
      <>
      <Head>
      <meta name="Description" content="VelusJet. Suchy masaż wodny. Strefowy masaż membranowy. Masaż karku, masaż mięśni.">
      </meta>
          <title>VelusJet. Suchy masaż wodny. Strefowy masaż membranowy</title>
        </Head>
      <main className={classes.MasazWodny}>
        <Grid container justify="space-between">
          <Heading2>Suchy masaż wodny</Heading2>
          <Heading3>VelusJet - Urządzenie do strefowego masażu membranowego</Heading3>
          <p>
            Masaże na VelusJet dostosowywane są z dokładnością do 1 cm, przez co terapeuta ma możliwość dostosowania masażu do indywidualnych potrzeb każdego pacjenta.
            </p>
          <p>
            Różnorodność typów masażu pozwala pacjentom osiągnąć najwyższy możliwy poziom dostosowania terapii do indywidualnych potrzeb.
            </p>
          <Image src={VelusImg} />
          <Grid item xs={12} sm={6} >
            <Heading3>Wpływ VelusJet na ustrój</Heading3>
            <ul>
              <ListItem>Pobudza układ krwionośny i limfatyczny do pracy, zapewniajać usługi transportowe, odżywcze, oczyszczające i regeneracyjne.</ListItem>
              <ListItem>Likwiduje objawy zastoinowe, a także przyśpiesza wchłanianie obrzęków.</ListItem>
              <ListItem>Zwiększa elastyczność i wytrzymałość aparatu więzadłowego oraz ruchomość stawów.</ListItem>
              <ListItem>Masaż karku, grzbietu oraz odcinka lędźwiowo-krzyżowego oddziałuje na nerwy rdzeniowe i ich sploty, a tym samym korzystnie działa na funkcje kończyn górnych i dolnych.</ListItem>
              <ListItem>Masaż mięśni przykręgosłupowych wpływa na autonomiczny układ nerwowy, regulując jego czynność.</ListItem>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Heading3>Wskazania do stosowania</Heading3>
            <ul>
              <ListItem>Stany zmęczenie po intensywnym wysiłku fizycznym</ListItem>
              <ListItem>Mięśniobóle z przeciążenia i spowodowane "złą" postawą ciała</ListItem>
              <ListItem>Zaniki, niedowłady, neurogenne zaniki mięśniowe</ListItem>
              <ListItem>Choroby zwyrodnieniowe stawów kręgosłupa i obwodowych</ListItem>
              <ListItem>Choroba Bechterewa (ZZSK)</ListItem>
              <ListItem>Przewlekłe zapalenia stawów</ListItem>
              <ListItem>Lumbago</ListItem>
              <ListItem>Uszkodzenia nerwów obwodowych</ListItem>
              <ListItem>Stany po (MPD) mózgowym porażeniu dziecięcym</ListItem>
              <ListItem>Zaburzenia krążenia obwodowego</ListItem>
              <ListItem>Nadmierna wiotkość tkanki skórnej</ListItem>
              <ListItem>Obrzęki limfatyczne</ListItem>
              <ListItem>Otyłość</ListItem>
              <ListItem>Cellulitis</ListItem>
            </ul>
          </Grid>
        </Grid>
      </main>
      </>
    )
  }
}

export default Velus;

