import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.css'; // Importa el archivo de estilos del layout
import Header from '../header/header';
import Footer from '../footer/footer';

const AppLayout = () => (
  <div className="layout-container">
    <Header className="layout-header" />
    <main className="layout-main">
      <Outlet /> {/* Aquí se renderizará el contenido de la ruta activa */}
    </main>
    <Footer className="layout-footer" />
  </div>
);

export default AppLayout;