import React, { useRef } from 'react';
import { Container, Grid, Button, TextField } from '@material-ui/core';
import { loginRequest, indexRequest } from 'service/api';
import Cookies from 'universal-cookie';

export const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [ loggedIn, setLoggedIn ] = React.useState(false);

  const checkLogin = async () => {
    const response = await indexRequest();
    console.log(response)
  }

  const doLogin = async (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    const data = await loginRequest(email.value, password.value);

    if (data.success) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }

  return (
    <>
      { loggedIn && <div> User logged in </div> }
      <form onSubmit={doLogin}>
        <Grid container direction="column" alignItems="left">
          <Grid container item xs={3}>
            <TextField
              name="email"
              label="Email"
            />
          </Grid>
          <Grid container item xs={3}>
            <TextField
              name="password"
              ref={passwordRef}
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid container item xs={3}>
            <Button type="submit" variant="outlined" color="primary" >
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
