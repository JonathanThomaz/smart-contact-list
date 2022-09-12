import React from 'react';
import { Header } from './styles';
import Logo from 'assets/svg/logo.svg';

export const HeaderLogo = () => (
  <Header data-testid="header-logo">
    <img src={Logo} alt="logo" />
  </Header>
);
