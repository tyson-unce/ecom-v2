import React from 'react';
import { NavLink } from 'react-router-dom';
import './compStyles/Navbar.css';

const Navbar = () => {
  return (
    <header className='nav'>
    <nav className='navHome'>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
        </ul>
    </nav>
    <nav className='navLogo'>
        <ul>
            <li id='logo'>
                <NavLink to="/">logo</NavLink>
            </li>
        </ul>
    </nav>
    <nav className='navRest'>
        <ul>
            <li>
                <NavLink to="/products">Products</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
</header>
  )
}

export default Navbar