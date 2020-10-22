import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Login, SignUp } from 'components';
import { StyledContainer } from './styled';

export const Header = () => {
  const [newUser, setNewUser] = React.useState(false)
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => setNewUser(false)}>Login</Button>
          <Button onClick={() => setNewUser(true)}>SignUp</Button>
        </Toolbar>
      </AppBar>

      { newUser ? <SignUp /> : <Login /> }
    </>
  )
}
