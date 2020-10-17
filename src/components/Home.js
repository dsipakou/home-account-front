import React from 'react';
import { Button } from '@material-ui/core';
import { HomeContainer } from './styled';

import { Login } from 'components/login';

export const Home = () => {
  return (
    <HomeContainer maxWidth="md">
      <div>This is home</div>
      <Login />
    </HomeContainer>
  )
}
