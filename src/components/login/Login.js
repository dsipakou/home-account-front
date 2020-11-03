import React, { useRef } from 'react';
import { Container, Grid, Button, TextField } from '@material-ui/core';

export const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const doLogin = (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    console.log(`User logged in with: ${email.value} and ${password.value}`);
  }

  return (
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
  )
}
