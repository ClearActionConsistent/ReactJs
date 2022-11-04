import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../views/components/Home';
import AboutPage from '../views/components/About';
import LoginPage from '../views/components/Login';
import RegisterPage from '../views/components/Register';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount() {
    console.log('Router componentDidMount');
  }

  componentWillUnmount() {
    console.log('Router componentWillUnmount');
  }

  render() {
    const loggedIn = this.state.isLoggedIn;
    return (
      <Switch>
        <Route path='/' exact render={() => (
          loggedIn ? <Redirect to='/home' /> : <Redirect to='/login' />
        )}
        />

        <Route path='/home' exact render={() => (
          loggedIn ? <Route path='/home' component={HomePage} /> : <Redirect to='/login' />
        )}
        />

        <Route path='/login' exact render={() => (
          loggedIn ? <Redirect path='/home' /> : <Route path='/login' component={LoginPage} />
        )}
        />

        <Route path='/about' exact render={() => (
          loggedIn ? <Route path='/about' component={AboutPage} /> : <Redirect path='/login' />
        )}
        />

        <Route path='/register' exact component={RegisterPage} />

        <Route path='*' exact render={() => (
          loggedIn ? <Redirect path='/home' /> : <Redirect path='/login' />
        )}
        />
      </Switch>
    )
  }
}

export default Router;