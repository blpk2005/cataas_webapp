import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Random Cat</NavLink>
        </li>
        <li>
          <NavLink to="/tag" className={({ isActive }) => isActive ? 'active' : ''}>Search by Tag</NavLink>
        </li>
        <li>
          <NavLink to="/text" className={({ isActive }) => isActive ? 'active' : ''}>Custom Text</NavLink>
        </li>
        <li>
          <NavLink to="/gif" className={({ isActive }) => isActive ? 'active' : ''}>Random GIF</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
