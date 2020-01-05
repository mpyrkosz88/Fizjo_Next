//styles
import classes from './Navigation.scss';
//components
import NavItem from '../NavItem/NavItem';

import HomeIcon from '../../../assets/images/homeIcon.png'


const navigation = () => (
  <nav className={classes.Navigation}>
    <ul className={classes.NavigationMenu}>  
      <NavItem
        link={`/`}
        active={classes.Active}>
        <img src={HomeIcon} alt="home page"/>
      </NavItem>   
      <NavItem
        link={`/fala_uderzeniowa`}
        active={classes.Active}>
        Fala uderzeniowa
      </NavItem>

      <NavItem
        link={`/hitop`}
        active={classes.Active}>
        Hitop
      </NavItem>
      <NavItem
        link={`/tesla_stym`} 
        active={classes.Active}>
        Tesla Stym
      </NavItem>
      <NavItem
        link={`/laser_wysokoenergetyczny`}
        active={classes.Active}>
       Laser wysokoenergetyczny
      </NavItem>

      <NavItem
        link={`/cennik`}
        active={classes.Active}>
       Cennik
      </NavItem>
      <NavItem
        link={`/kontakt`}
        active={classes.Active}>
       Kontakt
      </NavItem>
    </ul>
  </nav>
)

export default navigation;

      {/* <NavItem
        link={`/masaz_wodny`}
        active={classes.Active}>
        Masaż wodny
      </NavItem>

            <NavItem
        link={`/hivamat`}
        active={classes.Active}>
       Hivamat
      </NavItem> */}