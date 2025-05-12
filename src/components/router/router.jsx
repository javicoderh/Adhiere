import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from '../layout/layout';
import HomePage from '../home/home';
import GaleriaPage from '../galeria/galeria';


const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="galeria" element={<GaleriaPage />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;