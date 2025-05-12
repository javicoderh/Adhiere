import React from 'react';
import "../layout/layout.css"
import DonationButton from './botonDonaciones/donaciones';

const Footer = () => (
  <footer className='layout-footer'>
    <p>I'm footer</p>
    <DonationButton />
  </footer>
);

export default Footer;