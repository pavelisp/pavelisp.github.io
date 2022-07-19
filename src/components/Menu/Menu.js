import { NavLink } from 'react-router-dom';

function Menu({isOpen, openMenu}) {

  return (
    <nav>
      <button onClick={openMenu}>BOOM</button>
      {isOpen && (
        <ul>
        <NavLink to="/work">
          Work
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </ul>
      )}
    </nav>
  );
}

export default Menu;