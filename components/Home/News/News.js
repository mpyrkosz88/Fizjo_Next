//libraries
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';

//components
import Heading2 from '../../UI/Headings/Heading2';
import Heading3 from '../../UI/Headings/Heading3';
import classes from './News.scss';
import Image from '../../UI/Image/Image';

import Vanquish1 from '../../../assets/images/Vanquish_1.jpg'
import Vanquish2 from '../../../assets/images/Vanquish_2.jpg'
import Vanquish3 from '../../../assets/images/Vanquish_3.jpg'
import Vanquish4 from '../../../assets/images/Vanquish_4.jpg'
import Vanquish5 from '../../../assets/images/Vanquish_5.jpg'

class News extends Component {
  render() {
    return (

          <section className={classes.News}>
            <Heading2>Nowość w Legnicy!</Heading2>
            <Heading3>Vanquish - modelowanie sylwetki</Heading3>
            <p>Vanquish to  Metoda modelowania sylwetki i redukcji tkanki tłuszczowej.
            Dzięki zastosowaniu technologii LAHF (Large Area High-frequency Field - wielkoobszarowe pole wysokiej częstotliwości)
            w trakcie zabiegu redukcja tkanki tłuszczowej odbywa się w sposób nieinwazyjny, bezkontaktowy i w pełny zautomatyzowany.
      </p>
            <p className={classes.Heading}><strong className={classes.strong}>Redukcja</strong> tkanki tłuszczowej</p>
            <p className={classes.Heading}><strong className={classes.strong}>Zmniejszenie</strong> objętości</p>
            <p className={classes.Heading}><strong className={classes.strong}>Modelowanie</strong> ciała</p>
            <Grid item xs={12} sm={8} >
              <Image src={Vanquish1} alt="Vanquish"/>
              <Image src={Vanquish2} alt="Vanquish"/>
              <Image src={Vanquish3} alt="Vanquish"/>
              <Image src={Vanquish4} alt="Vanquish"/>
            </Grid>
            <p className={classes.Heading}><strong className={classes.strong}>PRZEBIEG ZABIEGU:</strong></p>
            <p>Podczas zabiegu, głowica emitująca energię umieszczana jest nad wybranym obszarem. W czasie jej działania, skóra jest bezpiecznie chłodzona przez powietrze, a skoncentrowane wielkoobszarowe pole wysokiej częstotliwości precyzyjne oddziałuje na głęboko położoną tkankę tłuszczową, utrzymując ją w temperaturze wyższej niż tkanki znajdujące się wokół niej. Przebieg zabiegu  wymaga tylko obecności operatora przy urządzeniu i nadzorowanie pracy systemu, co zapewnia komfort pacjentowi. Zabieg jest bezbolesny i bezpieczny. W trakcie jego trwania będziesz odczuwała przyjemne ciepło. Zaleca się wykonanie serii 4 zabiegów w odstępach co 5-7 dni.
            </p>

            <p className={classes.Heading}><strong className={classes.strong}>KTO JEST IDEALNYM KANDYDATEM DO ZABIEGU BTL VANQUISH ME?</strong></p>
            <p>Każdy, kto marzy o poprawie swojego wygladu i zmniejszeniu obwodu brzucha lub ud — niezależnie od wskaźnika BMI. Bez ponoszenia dużych kosztów i rekonwalescencji związanej z zabiegiem chirurgicznym.</p>

            <p className={classes.Heading}><strong className={classes.strong}>JAK DŁUGO TRWA ZABIEG? <br/>ILE SESJI POTRZEBUJĘ?</strong></p>
            <p>Podczas pierwszej wizyty specjalista opracowuje indywidualny plan zabiegów. Większość osób korzysta z 4 sesji, z jednotygodniowym odstępem. Pojedynczy zabieg na uda trwa ok. 45 minut, a na brzuch ok. 30 minut.</p>

            <p className={classes.Heading}><strong className={classes.strong}>JAK WYGLĄDA SAM ZABIEG? <br/>CZY JEST BOLESNY?</strong></p>
            <p>Największą zaletą stosowania BTL VANQUISH ME jest komfort i bezbolesność. Zabieg wykonywany jest w pozycji Ieżacej, która zapewnia relaks. Na obszarze poddanym terapii odczuwalne jest jedynie przyjemne ciepło.</p>

            <p className={classes.Heading}><strong className={classes.strong}>JAK SZYBKO ZOBACZĘ EFEKTY? <br/>ILE WYNOSI REKONWALESCENCJA?</strong></p>
            <p>Rezultaty obserwuje się zazwyczaj od dwóch do trzech tygodni od wykonania pierwszego zabiegu. W tej fazie trwa proces fizjologicznej eliminacji rozbitych komórek tłuszczowych. Do codziennych zajeć moZna powrócić bezpośrednio po zabiegu.</p>
            <Grid item xs={12}>
              <Image src={Vanquish5} alt="Vanquish"/>
            </Grid>
  </section>

    )
  }
}
export default News;

