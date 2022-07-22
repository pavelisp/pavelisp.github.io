import { NavLink } from 'react-router-dom';
import './Menu.scss';

import menuIcon from '../../assets/images/menu_icon.svg'

function Menu({isOpen, openMenu}) {

  return (
    <nav className='menu'>
      <img className='menu__button' src={menuIcon} onClick={openMenu} alt=""/>
      {isOpen && (
        <ul className='menu__overlay'>
          <NavLink className='menu__link' to="/" onClick={openMenu}>
          Home
        </NavLink>
        <NavLink className='menu__link' to="/work" onClick={openMenu}>
          Work
        </NavLink>
        <NavLink className='menu__link' to="/about" onClick={openMenu}>
          About
        </NavLink>
        <NavLink className='menu__link' to="/contact" onClick={openMenu}>
          Contact
        </NavLink>
      </ul>
      )}
    </nav>
  );
}

export default Menu;