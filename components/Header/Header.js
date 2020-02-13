//libraries
import React, {Component} from 'react';

//components
import Navigation from '../Navigation/TopNav/Navigation';
import MainHeading from '../UI/Headings/MainHeading'
import NavMobile from '../Navigation/NavMobile/NavMobile';

class Header extends Component {

  render () {
    return (
      <header>
        <MainHeading>Prywatny Gabinet Masażu i Fizjoterapii</MainHeading>
        <Navigation />  
        <NavMobile />
      </header>
    )
  }
}


export default Header;
