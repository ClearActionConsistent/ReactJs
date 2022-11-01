import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './../views/components/Home/index';
import AddTask from './../views/components/AddTask/index';
import AboutPage from './../views/components/About/index';
import NotFoundPage from './../views/components/NotFound/index';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default Routers;