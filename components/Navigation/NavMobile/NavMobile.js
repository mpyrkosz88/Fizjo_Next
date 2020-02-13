//libraries
import React, { Component } from 'react';
//styles
import classes from './NavMobile.scss';
//components
import NavItem from '../NavItem/NavItem';
import NavBtn from '../NavBtn//NavBtn';

class Navigation extends Component {

  state = {
    hide: true,
    active: false,
  }

  toggleMobile = () => {
    this.setState({
      hide: !this.state.hide,
      active: !this.state.active
    })
  }
  render() {

    let showMenu = classes.Hide;
    this.state.hide ? showMenu = classes.Hide : showMenu = classes.Show

    return (
      <nav className={classes.NavMobile}>
        <NavBtn clicked={this.toggleMobile} active={this.state.active} />
        <div className={classes.NavMenu + " " + showMenu}>
          <ul>
            <NavItem
              href='/'
              clicked={this.toggleMobile}>
              Strona główna
          </NavItem>
            <NavItem
              href='/fala_uderzeniowa'
              clicked={this.toggleMobile}>
              Fala uderzeniowa
          </NavItem>
            <NavItem
              href={`/masaz_wodny`}
              clicked={this.toggleMobile}>
              Masaż wodny
        </NavItem>
            <NavItem
              href='/hitop'
              clicked={this.toggleMobile}>
              Hitop
          </NavItem>
            <NavItem
              href='/tesla_stym'
              clicked={this.toggleMobile}>
              Tesla Stym
          </NavItem>
            <NavItem
              href='/laser_wysokoenergetyczny'
              clicked={this.toggleMobile}>
              Laser wysokoenergetyczny
          </NavItem>
            <NavItem
              href='/hivamat'
              clicked={this.toggleMobile}>
              Hivamat
          </NavItem>
            <NavItem
              href='/cennik'
              clicked={this.toggleMobile}>
              Cennik
          </NavItem>
            <NavItem
              href='/kontakt'
              clicked={this.toggleMobile}>
              Kontakt
          </NavItem>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation;
