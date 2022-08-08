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
        <a className='menu__link' href="#work" onClick={openMenu}>
          Work
        </a>
        <a className='menu__link' href="#about" onClick={openMenu}>
          About
        </a>
        <a className='menu__link' href="#contact" onClick={openMenu}>
          Contact
        </a>
      </ul>
      )}
    </nav>
  );
}

export default Menu;