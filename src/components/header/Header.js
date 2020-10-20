import React from 'react';
import { Container } from '@material-ui/core';
import { Login, SignUp } from 'components';
import { StyledContainer } from './styled';

export const Header = () => {
  return (
    <StyledContainer>
      <Login />
    </StyledContainer>
  )
}
