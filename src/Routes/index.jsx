import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../views/pages/AboutPage';
import LoginPage from '../views/pages/LoginPage';
import SignupPage from '../views/pages/SignupPage';
import PrivateRoute from '../views/components/PrivateRoute';
import HomePage from '../views/pages/HomePage';
import Classes from './../views/components/Classes';
import Subscribe from '../views/components/Subscribe';
import ChallengeBoard from '../views/components/ChallengeBoard';
import WorkoutHistory from '../views/components/WorkoutHistory';
import ListPost from '../views/components/Posts';

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <Routes>
      <Route
        exact
        path='/'
        element={<PrivateRoute isLoggedIn={isLoggedIn} />}
      />
      <Route path='/home' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<SignupPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/classes' element={<Classes />} />
      <Route path='/subscribe' element={<Subscribe />} />
      <Route path='/workout/challenge' element={<ChallengeBoard />} />
      <Route path='/workout' element={<WorkoutHistory />} />
      <Route path='/community' element={<ListPost />} />
    </Routes>
  );
}

export default Router;
