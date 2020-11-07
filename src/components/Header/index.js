import React from 'react';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';


import logoImg from '../../assets/logo.svg';

import { Container } from './styles';
import { shade } from 'polished';

import { useTheme } from '../../hooks/theme'

const Header = () => {

  const { toggleTheme, theme } = useTheme()

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={theme.title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={40}
        width={80}
        handleDiameter={40}
        offColor={shade(0.15, theme.colors.primary)}
        onColor={theme.colors.secundary}
      />
      <div>
        <Link to="/">
          <img src={logoImg} alt="Star Wars" />
        </Link>
      </div>
    </Container>
  );
};

export default Header;
