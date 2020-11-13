import React, { useRef } from 'react';
import { Container, Grid, Button, TextField } from '@material-ui/core';
import { loginRequest, indexRequest } from 'service/api';

export const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [ loggedIn, setLoggedIn ] = React.useState(false);

  const doLogin = async (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const data = await loginRequest(email.value, password.value);
    if (data.status === 200) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
    console.log(`Hello there: ${data}`);
    console.log(`User logged in with: ${email.value} and ${password.value}`);
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
