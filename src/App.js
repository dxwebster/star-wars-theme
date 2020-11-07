import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

import { CustomThemeProvider } from './hooks/theme'

function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
