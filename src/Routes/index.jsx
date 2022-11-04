import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../views/components/About';
import LoginPage from '../views/components/Login';
import SignupPage from '../views/components/Signup';
import PrivateRoute from '../views/components/PrivateRoute';
import HomePage from '../views/components/Home';

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
    console.log(loggedIn);
    return (
      <Routes>
        <Route exact path='/' element={<PrivateRoute isLoggedIn={loggedIn} />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignupPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    )
  }
}

export default Router;
