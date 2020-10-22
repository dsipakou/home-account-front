import React from 'react';
import { Container, Grid, Button, TextField } from '@material-ui/core';

export const Login = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="left"
    >
      <Grid
        container
        item
        xs={3}
      >
        <TextField
          id="outlined-required"
          label="e-mail"
          variant="outlined"
        />
      </Grid>
      <Grid
        container
        item
        xs={3}
      >
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      </Grid>
      <Grid
        container
        item
        xs={3}
      >
        <Button variant="outlined" color="primary">
          Log in
        </Button>
      </Grid>
    </Grid>
  )
}
