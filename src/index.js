import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from 'components/home';
import { Header } from 'components/header';
import { Account, Login, SignUp} from 'components/user';
import { Transactions, NewTransaction } from 'components/transactions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';

import { Container } from '@material-ui/core';

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/transactions' component={Transactions} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/account' component={Account} />
          <Route path='/transactions/add' component={NewTransaction} />
        </Switch>
      </Router>
    </Container>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
