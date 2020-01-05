//libraries
import React from 'react';

//components
import Heading2 from '../../UI/Headings/Heading2';
import Heading4 from '../../UI/Headings/Heading4';
import ListItem from '../../UI/List/ListItem';

const Home_3 = () => (
  <section>
    <Heading2>Wykonywane zabiegi</Heading2>
    <Heading4>Fizykoterapia:</Heading4>
    <ul>
        <ListItem>Fala uderzeniowa</ListItem>
        <ListItem>Głęboka elektromagnetostymulacja (FMS)</ListItem>
        <ListItem>Laser wysokoenergetyczny</ListItem>
        <ListItem>Terapia energotonowa (HI-TOP)</ListItem>
        <ListItem>Galwanizacja</ListItem>
        <ListItem>Jonofereza</ListItem>
        <ListItem>Diadynamik</ListItem>
        <ListItem>Tens</ListItem>
        <ListItem>Interdym</ListItem>
        <ListItem>Ultradźwięki</ListItem>
        <ListItem>Fonofereza</ListItem>
        <ListItem>Magnetoterapia</ListItem>
        <ListItem>Laser niskoenergetyczny</ListItem>
        <ListItem>Lampa solux</ListItem>
        <ListItem>Terapia skojarzeniowa</ListItem>
        <ListItem>Terapia przeciwobrzękowa</ListItem>
        <ListItem>Krioterapia miejscowa</ListItem>
        <ListItem>Masaż wibracyjny</ListItem>
    </ul>
    <Heading4>Kinezyterapia:</Heading4>
      <ul>
        <ListItem>Ćwiczenia w chorobach zwyrodnieniowych stawów</ListItem>
        <ListItem>Ćwiczenia po zabiegu endoprotezy stawu biodrowego i kolanowego</ListItem>
        <ListItem>Przygotowanie do zabiegów operacyjnych</ListItem>
        <ListItem>Urazy i uszkodzenia w sporcie</ListItem>
      </ul>
      <Heading4>Pozostałe zabiegi:</Heading4>
      <ul>
        <ListItem>Masaż leczniczy</ListItem>
        <ListItem>Suchy masaż wodny</ListItem>
      </ul>
  </section>
   
)
export default Home_3;

