import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from '../src/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
};

export default App;