import React from 'react';

import { Container } from './styles';
import RebelSymbolBG from '../../assets/RebelSymbolBG.png';

export default function Poster({ movieNumber }) {
  return (
    <Container className="poster">
      <img src={require(`../../assets/${movieNumber}.png`)} alt="Star Wars" className="random-img" />

      <img src={RebelSymbolBG} alt="Star Wars" />
    </Container>
  );
}
