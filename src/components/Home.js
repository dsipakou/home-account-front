import React from 'react';
import { Button } from '@material-ui/core';
import { HomeContainer } from './styled';

import { Header } from 'components';

export const Home = () => {
  return (
    <HomeContainer maxWidth="md">
      <Header />
    </HomeContainer>
  )
}
