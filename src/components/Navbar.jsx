import React from 'react';
import { NavLink } from 'react-router-dom';
import './compStyles/Navbar.css';

const Navbar = () => {
  return (
    <header>
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
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