//libraries
import React, {Component} from 'react';

//components
import Navigation from './TopNav/Navigation';
import Heading1 from '../UI/Headings/Heading1'
// import NavMobile from '../NavMobile/NavMobile';

class Header extends Component {

  render () {
    return (
      <header>
        <Heading1>Prywatny Gabinet Masażu i Fizjoterapii</Heading1>
        <Navigation />  
      </header>
    )
  }
}


export default Header;
