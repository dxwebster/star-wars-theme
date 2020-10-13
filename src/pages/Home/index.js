import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';
import rebelSymbol from '../../assets/rebelSymbol.svg';
import empireSymbol from '../../assets/empireSymbol.svg';
import Background from '../../components/Background';

const Card = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <h1>Escolha seu lado</h1>
        <div>
          <Link to="/light-theme">
            <img src={rebelSymbol} alt="rebelSymbol" />
          </Link>

          <Link to="/dark-theme">
            <img src={empireSymbol} alt="empireSymbol" />
          </Link>
        </div>
      </Content>
    </Container>
  );
};

export default Card;
