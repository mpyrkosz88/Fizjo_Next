//libraries
import React from 'react';
import Head from 'next/head';

//components
import Heading2 from '../components/UI/Headings/Heading2';
import Heading3 from '../components/UI/Headings/Heading3';

import classes from '../styles/Kontakt.scss';

const Kontakt = () => (
  <>
    <Head>
      <meta name="Description" content="Biegunowa, Legnica, Przychodnia, Fizjoterapia Doleczych, kontakt, fala uderzeniowa, masaż wodny hitop tesla stym pole magnetyczne">
      </meta>
      <link rel="canonical" href="http://www.doleczychfizjoterapia.pl/kontakt" />
      <title>Kontakt. Fizjoterapia Legnica. Mgr Arnold Doleczych.</title>
    </Head>
    <main>
      <section className={classes.Kontakt}>
        <Heading2>Gdzie nas znaleźć</Heading2>
        <Heading3>Adres:</Heading3>
        <p>ul. Biegunowa 2 </p>
        <p>59-220 Legnica</p>
        <p>2 piętro pokój 19</p>
        <div className={classes.Map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1249.953884723075!2d16.188445299336255!3d51.20235112688946!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f0d701d4a584b%3A0x35712f53bfa763aa!2sBiegunowa.+NZOZ!5e0!3m2!1spl!2sfi!4v1531848332805"></iframe>
          <iframe src="https://www.google.com/maps/embed?pb=!4v1531848857663!6m8!1m7!1s6FO3aC7P90xPBti0DLJD6A!2m2!1d51.20259534323887!2d16.1883175430986!3f139.64925652167702!4f-2.0789817158071173!5f3.1700262894070796"></iframe>
        </div>
        <Heading3>Rejestracja telefoniczna:</Heading3>
        <div className={classes.Phone_container}>
          <i className="fas fa-phone fa-2x"></i><p>(+48) 609 687 320 - Magister Arnold Doleczych</p>
        </div>
        <div className={classes.Phone_container}>
          <i className="fas fa-phone fa-2x"></i><p>(+48) 604 923 379 - Fizjoterapeuta Michał Doleczych </p>
        </div>
        <div className={classes.Phone_container}>
          <i className="fas fa-phone fa-2x"></i><p>(+48) 535 070 283 - Fizjoterapeuta Katarzyna Doleczych </p>
        </div>

        <Heading3>Godziny otwarcia:</Heading3>
        <div className={classes.Phone_container}>
          <i className="fas fa-clock fa-2x"></i><p>Poniedziałek-Piątek: 08:00 - 17:00</p>
        </div>
        <div className={classes.Phone_container}>
          <i className="fas fa-clock fa-2x"></i><p>Sobota-Niedziela: Nieczynne</p>
        </div>
      </section>
    </main>
  </>
)
export default Kontakt;

