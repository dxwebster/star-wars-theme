import React, { useState } from 'react';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Background from '../../components/Background';
import Card from '../../components/Card';

import { ThemeProvider } from 'styled-components';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

function SearchPage() {
  const [theme, setTheme] = useState(light);

  const handleToggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    console.log(theme.title);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Background />
        <Header handleToggleTheme={handleToggleTheme} />
        <Content>
          <Card />
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default SearchPage;
