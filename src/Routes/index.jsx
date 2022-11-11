import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../views/pages/AboutPage';
import LoginPage from '../views/pages/LoginPage';
import SignupPage from '../views/pages/SignupPage';
import PrivateRoute from '../views/components/PrivateRoute';
import HomePage from '../views/pages/HomePage';
import Classes from './../views/components/Classes';
import Subscribe from '../views/components/Subscribe';
import WorkoutHistory from '../views/components/WorkoutHistory';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
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
        <Route
          exact
          path='/'
          element={<PrivateRoute isLoggedIn={loggedIn} />}
        />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignupPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/summary' element={<WorkoutHistory />} />
      </Routes>
    );
  }
}

export default Router;
