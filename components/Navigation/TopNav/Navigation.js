//styles
import classes from './Navigation.scss';
//components
import NavItem from '../NavItem/NavItem';

const navigation = () => (
  <nav className={classes.Navigation}>
    <ul className={classes.NavigationMenu}>
      <NavItem
        href={`/`}
      >
        <i className="fas fa-home fa-2x"></i>
      </NavItem>
      <NavItem
        href={`/fala_uderzeniowa`}
      >
        Fala uderzeniowa
      </NavItem>
      <NavItem
        href={`/masaz_wodny`}
      >
        Masaż wodny
      </NavItem>
      <NavItem
        href={`/hitop`}
      >
        Hitop
      </NavItem>
      <NavItem
        href={`/tesla_stym`}
      >
        Tesla Stym
      </NavItem>
      <NavItem
        href={`/laser_wysokoenergetyczny`}
      >
        Laser wysokoenergetyczny
      </NavItem>
      <NavItem
        href={`/hivamat`}
      >
        Hivamat
      </NavItem>
      <NavItem
        href={`/cennik`}
      >
        Cennik
      </NavItem>
      <NavItem
        href={`/kontakt`}
        active={classes.Active}>
        Kontakt
      </NavItem>
    </ul>
  </nav>
)

export default navigation;