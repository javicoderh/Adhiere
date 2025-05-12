import React from 'react';
import './donaciones.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importa Link

const DonationButton = () => {
  return (
    <Link to="/donaciones" className="donation-link">
        <h2 className='texto-neon-animado donarTxt'>¡Donar!</h2>
      <button className="donation-button">
        <FontAwesomeIcon icon={faHeart} className="donation-icon" />
      </button>
    </Link>
  );
};

export default DonationButton;