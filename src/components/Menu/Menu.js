import { NavLink } from 'react-router-dom';
import './Menu.scss';

function Menu({isOpen, openMenu}) {

  return (
    <nav className='menu'>
      <button onClick={openMenu}>BOOM</button>
      {isOpen && (
        <ul className='menu__overlay'>
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