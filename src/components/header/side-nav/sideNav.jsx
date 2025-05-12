import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './sideNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null); 

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Acerca de', path: '/about' },
    { name: 'Contacto', path: '/contact' },
  ];

  const toggleNav = () => {
    console.log(isOpen)
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      toggleRef.current &&
      !toggleRef.current.contains(event.target) && // Verifica que el clic no sea en el toggle
      isOpen
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="sidenav-toggle" onClick={toggleNav} ref={toggleRef}>
        <FontAwesomeIcon
          icon={isOpen ? faChevronRight : faChevronLeft}
          className="arrow-icon"
        />
        Secciones        
      </div>
      <nav ref={navRef} className={`sidenav-container ${isOpen ? 'open' : ''}`}>
       <ul> 
        {routes.map((route) => (        
          <Link key={route.path} to={route.path} className="sidenav-button">
            <li>
            {route.name}
            </li>
          </Link>
        ))}
        </ul>
      </nav>
    </>
  );
};

export default SideNav;