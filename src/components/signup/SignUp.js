import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import { signUpRequest } from 'service/api';

export const SignUp = () => {
  const [ areEqualPasswords, setAreEqualPassword ] = React.useState(true);
  const [ isSignedUp, setIsSignedUp ] = React.useState(false);

  const doSignup = async (event) => {
    event.preventDefault();
    const { username, email, password, repeatPassword } = event.currentTarget.elements;
    if (password.value !== repeatPassword.value) {
      setAreEqualPassword(false);
      return;
    }
    const data = await signUpRequest(username.value, email.value, password.value);
    console.log(data);
  }
  return (
    <>
      { areEqualPasswords !== 'undefined' && !areEqualPasswords && <div>Passwords are not equal</div> }
      <form onSubmit={doSignup}>
        <Grid container direction="column" alignItems="left">
          <Grid container item xs={3}>
            <TextField label="Username *" name="username" />
          </Grid>
          <Grid container item xs={3}>
            <TextField name="email" label="Email *" />
          </Grid>
          <Grid container item xs={3}>
            <TextField label="Password *" name="password" type="password" />
          </Grid>
          <Grid container item xs={3}>
            <TextField label="Repeat password" name="repeatPassword" type="password"/>
          </Grid>
          <Grid container item>
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

