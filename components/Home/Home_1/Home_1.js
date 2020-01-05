//libraries
import React from 'react';

//components
import Heading2 from '../../UI/Headings/Heading2';

import classes from './Home_1.scss';

const Home_1 = () => (
  <section className={classes.Home}>
    <Heading2>O nas</Heading2>
    <ul>
      <li>Arnold Doleczych - magister fizjoterapii</li>
      <li>Michał Doleczych - licencjonowany fizjoterapeuta</li>
      <li>Katarzyna Doleczych - licencjonowany fizjoterapeuta</li>
    </ul>
  </section>
   
)
export default Home_1;

