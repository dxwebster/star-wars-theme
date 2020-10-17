import React, { useState } from 'react';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Background from '../../components/Background';
import Card from '../../components/Card';

import { ThemeProvider } from 'styled-components';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Background />
      <Container>
        <Header toggleTheme={toggleTheme} />

        <Content>
          <Card />
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default App;
