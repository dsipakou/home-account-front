import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from 'components/Home';
import { Header } from 'components';
import { Account } from 'components/user';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/account' component={Account} />
        </Switch>
      </Router>
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
