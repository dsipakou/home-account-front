import React from 'react';
import { Container, ButtonGroup, Button } from '@material-ui/core';
import { Login, SignUp } from 'components';
import { StyledContainer } from './styled';

export const Header = () => {
  const [newUser, setNewUser] = React.useState(false)
  return (
    <>
      <StyledContainer>
        <ButtonGroup variant="text">
          <Button onClick={() => setNewUser(false)}>Login</Button>
          <Button onClick={() => setNewUser(true)}>SignUp</Button>
        </ButtonGroup>
      </StyledContainer>

      { newUser ? <SignUp /> : <Login /> }
    </>
  )
}
