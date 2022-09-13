import React from 'react';
import { Header } from './styles';
import Logo from 'assets/svg/logo.svg';
import { useNavigate } from 'react-router-dom';

export const HeaderLogo = () => {
  const navigate = useNavigate();
  return (
    <Header data-testid="header-logo" onClick={() => navigate('/')}>
      <img src={Logo} alt="logo" />
    </Header>
  );
};
