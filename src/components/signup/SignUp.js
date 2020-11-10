import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core';

export const SignUp = () => {
  return (
    <Grid container direction="column" alignItems="left">
      <Grid container item xs={3}>
        <TextField label="Email" />
      </Grid>
      <Grid container item xs={3}>
        <TextField label="Password" type="password" />
      </Grid>
      <Grid container item xs={3}>
        <TextField label="Repeat password" type="password"/>
      </Grid>
      <Grid container item>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </Grid>
    </Grid>
  )
}

