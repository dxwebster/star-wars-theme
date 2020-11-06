import React from 'react';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Background from '../../components/Background';
import Card from '../../components/Card';


function SearchPage() {

  return (
    <Container>
      <Background />
      <Header />
      <Content>
        <Card />
      </Content>
    </Container>
  );
}

export default SearchPage;
