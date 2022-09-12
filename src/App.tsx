import React from 'react';
import { HeaderLogo } from 'components/HeaderLogo';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes';

function App() {
  return (
    <BrowserRouter>
      <HeaderLogo />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
