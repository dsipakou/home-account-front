import React from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { HomeContainer } from './styled';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <HomeContainer maxWidth="md">
      <List>
        <ListItem button>
          <Link exact to="/transactions">View transactions</Link>
        </ListItem>
        <ListItem button>
          <Link to="/transactions/add">Store transaction</Link>
        </ListItem>
      </List>
    </HomeContainer>
  )
}
