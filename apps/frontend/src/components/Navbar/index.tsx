import React from 'react';
import { Container } from './styles';
import logo from '../../assets/images/logo.svg';
import { api } from '../../service/api';

export function Navbar() {

  const getData = async () => {
    const { data } = await api.get('/auth/status', {
      withCredentials: true,
      headers: {
         "Access-Control-Allow-Credentials": true
      }
    });
    console.log(data);
  }

  return (
    <Container>
      <img src={logo} alt='logo-img' />
      <a href="http://localhost:3000/auth/google" target='_blank'>Login w/ Google</a>
    </Container>
  )
};