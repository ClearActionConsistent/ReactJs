import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './../views/components/Home/index';
import AddTask from './../views/components/AddTask/index';
import AboutPage from './../views/components/About/index';
import NotFoundPage from './../views/components/NotFound/index';
import SignUp from '../views/components/SignUp';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/register" exact element={<SignUp />} />
      <Route path="/add" element={<AddTask />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Routers;