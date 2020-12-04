import React from 'react';
import { Container, Grid, Button, TextField } from '@material-ui/core';

export const NewTransaction = () => {
  const valueRef = React.useRef();

  const addTransaction = () => {
    console.log("Add pressed")
  }

  return (
      <form onSubmit={addTransaction}>
        <Grid container direction="column">
          <Grid container item xs={3}>
            <TextField
              name="name"
              label="Transaction Name"
            />
          </Grid>
          <Grid container item xs={3}>
            <TextField
              name="value"
              ref={valueRef}
              label="Amount"
            />
          </Grid>
          <Grid>
            <Button type="submit" variant="outlined" color="primary">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
  )
}
