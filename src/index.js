import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from 'components/Home';
import { Header } from 'components';
import { Account, Login, SignUp} from 'components/user';
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
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/account' component={Account} />
        </Switch>
      </Router>
    </Container>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
