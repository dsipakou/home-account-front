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
        <TextField color="primary" label="Username" />
      </Grid>
      <Grid
        container
        item
        xs={3}
      >
        <TextField color="primary" label="Password" type="password" />
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
