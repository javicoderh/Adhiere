import React from 'react';
import "../layout/layout.css"
import Logo from "../../assets/Adhiere.png";
import SideNav from './side-nav/sideNav';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='layout-header'>
    <Link to="/">
        <img src={Logo} alt="" className="logo" />
    </Link>
    <h1><span className='titSpan'>fundación</span> <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Adhiere</h1>
    <SideNav />
  </header>
);

export default Header;