import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutPage from '../views/pages/AboutPage';
import LoginPage from '../views/pages/LoginPage';
import SignupPage from '../views/pages/SignupPage';
import PrivateRoute from '../views/components/PrivateRoute';
import HomePage from '../views/pages/HomePage';
import ChallengeBoard from '../views/components/ChallengeBoard';
import WorkoutHistory from '../views/components/WorkoutHistory';
import ListPost from '../views/components/Posts';
import NotFoundPage from '../views/pages/NotFoundPage';
import MemberManagement from '../views/pages/AdminSide/MemberManagement';
import ExerciseManagement from '../views/pages/AdminSide/ExerciseManagement';

const Router = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
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
      <Route path='/workout/challenge' element={<ChallengeBoard />} />
      <Route path='/workout' element={<WorkoutHistory />} />
      <Route path='/community' element={<ListPost />} />
      <Route path='/not-found-page' element={<NotFoundPage />} />
      <Route path='/member-management' element={<MemberManagement />} />
      <Route path='/exercise-management' element={<ExerciseManagement />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
