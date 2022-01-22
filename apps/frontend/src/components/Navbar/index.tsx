import React from 'react';
import { Container } from './styles';
import logo from '../../assets/images/logo.svg';

export function Navbar() {
  return (
    <Container>
      <img src={logo} alt='logo-img' />
      <button>Login</button>
    </Container>
  )
};