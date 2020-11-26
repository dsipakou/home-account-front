import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Login, SignUp } from 'components/user';
import { StyledContainer } from './styled';
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to='/login'>
          <Button>Login</Button>
        </Link>
        <Link to='/signup'>
          <Button>SignUp</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
