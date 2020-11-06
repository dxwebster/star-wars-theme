import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';
import rebelSymbol from '../../assets/rebelSymbol.svg';
import empireSymbol from '../../assets/empireSymbol.svg';
import Background from '../../components/Background';

import { useTheme } from '../../hooks/theme'


function Home() {

  const { changeThemeByName } = useTheme()

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Star Wars" />
        <h1>Escolha seu lado</h1>
        <div>
          <Link to="/search-page" onClick={() => changeThemeByName('light')}>
            <img src={rebelSymbol} alt="rebelSymbol" />
          </Link>

          <Link to="/search-page" onClick={() => changeThemeByName('dark')}>
            <img src={empireSymbol} alt="empireSymbol" />
          </Link>
        </div>
      </Content>
    </Container>
  );
}

export default Home;
