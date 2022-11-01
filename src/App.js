import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/components/Home';
import AboutPage from './views/components/About';
import NotFoundPage from './views/components/NotFound';
import AddTask from './views/components/AddTask';
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' exact element={<HomePage />} />
      <Route path='/add' element={<AddTask />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
};

export default App;
